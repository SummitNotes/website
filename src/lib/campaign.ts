/**
 * App Store campaign attribution.
 *
 * Apple's App Analytics cannot see `utm_*`. Query parameters are dropped at the
 * hand-off from the site to the App Store, and the only campaign signal Apple
 * reads is the pair it defines itself, carried on the store link:
 *
 *   `pt` — provider token, one per developer account
 *   `ct` — campaign token, a free-form string (max 40 characters)
 *
 * So attribution is two layers. The ad tags the *site* visit with `utm_*`,
 * which PostHog reads; the Download link then carries a `ct` that maps that
 * visit onto a campaign in App Store Connect → App Analytics → Acquisition.
 *
 * The visit that lands from an ad is rarely the visit that clicks Download —
 * people read a blog post, wander, come back — so the UTMs are remembered
 * first-touch (see AppStoreCampaign.astro) rather than read from the current
 * URL.
 *
 * Caveat worth remembering when reading the numbers: App Analytics campaigns
 * report downloads reliably, but attribution downstream of the install (to a
 * purchase) is weak. "How many installs did LinkedIn drive" is answerable here;
 * "how many of those paid" is not.
 */

/** Provider token for the Summit developer account (`pt`). */
export const APP_STORE_PROVIDER_TOKEN = "128261560";

/** Apple truncates campaign tokens beyond this length. */
export const MAX_CAMPAIGN_TOKEN_LENGTH = 40;

/**
 * Campaigns that exist in App Store Connect, keyed by the `utm_source` the
 * paid channel puts on the landing URL.
 *
 * The values are the exact `ct` tokens of the campaigns created in App Store
 * Connect — they are what shows up as the campaign name in App Analytics, so
 * they must match character for character. Aliases map several spellings of a
 * channel onto one campaign.
 *
 * To report a channel at finer grain than this, create the campaign in App
 * Store Connect first and add the row here; an unknown `ct` reaching Apple is
 * counted, but under a name nobody recognises.
 */
export const CAMPAIGN_BY_SOURCE: Readonly<Record<string, string>> = {
  // https://apps.apple.com/app/apple-store/id6754717420?pt=128261560&ct=LinkedIn&mt=8
  linkedin: "LinkedIn",
  "linked-in": "LinkedIn",
  li: "LinkedIn",

  // https://apps.apple.com/app/apple-store/id6754717420?pt=128261560&ct=Meta&mt=8
  meta: "Meta",
  facebook: "Meta",
  fb: "Meta",
  instagram: "Meta",
  ig: "Meta",
};

/**
 * Landing-page parameters kept for attribution.
 *
 * Deliberately campaign-level only: the `li_*` values identify the ad, the ad
 * set and the advertiser account, never the person who clicked. Third-party
 * click identifiers (`fbclid`, `gclid`, …) identify a *user* to an ad network
 * and are left alone — storing them would contradict what the cookie policy
 * promises.
 */
export const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "li_ad_id",
  "li_ad_set_id",
  "li_account_id",
] as const;

export type TrackedParam = (typeof TRACKED_PARAMS)[number];

/** A remembered ad click: the parameters it carried and the campaign it maps to. */
export interface Attribution {
  /** Schema version, so a stored record from an older site build can be discarded. */
  v: 1;
  /** When the click was first seen, epoch milliseconds. */
  ts: number;
  /** Resolved App Store campaign token, or null when the source maps to no campaign. */
  ct: string | null;
  /** The tracked parameters present on the landing URL. */
  params: Partial<Record<TrackedParam, string>>;
}

/** Current attribution schema version. */
export const ATTRIBUTION_VERSION = 1;

/** Where the remembered click is kept, in local or session storage. */
export const ATTRIBUTION_STORAGE_KEY = "summit-attribution";

/** Consent flag written by the cookie banner. */
export const CONSENT_STORAGE_KEY = "summit-cookie-consent";

/** How long a remembered click stays valid. */
export const ATTRIBUTION_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

/**
 * Resolves a `utm_source` to the campaign token to send Apple.
 *
 * Returns null for sources with no campaign of their own — organic and email
 * visits keep a clean store link and land in App Analytics under the plain web
 * referrer, rather than being folded into a paid campaign they did not come
 * from.
 */
export function campaignTokenForSource(source: string | undefined | null): string | null {
  if (!source) return null;
  const normalized = source.trim().toLowerCase();
  return CAMPAIGN_BY_SOURCE[normalized] ?? null;
}

/** True for links that point at the App Store and therefore accept `pt`/`ct`. */
export function isAppStoreUrl(href: string): boolean {
  try {
    return new URL(href, "https://summitnotes.app").hostname === "apps.apple.com";
  } catch {
    return false;
  }
}

/**
 * Adds the provider and campaign tokens to an App Store link.
 *
 * Everything already on the URL is preserved — the site's links carry `l` and
 * `mt` values that select the storefront and the Mac App Store, and dropping
 * them would change where the link lands. Only `pt` and `ct` are set, so the
 * call is idempotent.
 */
export function withCampaign(href: string, token: string): string {
  try {
    const url = new URL(href);
    url.searchParams.set("pt", APP_STORE_PROVIDER_TOKEN);
    url.searchParams.set("ct", token.slice(0, MAX_CAMPAIGN_TOKEN_LENGTH));
    return url.toString();
  } catch {
    return href;
  }
}

/**
 * Reads the tracked parameters off a landing URL's query string.
 *
 * Returns null when the visit carries no attribution at all, which is the
 * common case and must not overwrite what an earlier ad click stored.
 */
export function attributionFromSearch(search: string, now = Date.now()): Attribution | null {
  let query: URLSearchParams;
  try {
    query = new URLSearchParams(search);
  } catch {
    return null;
  }

  const params: Partial<Record<TrackedParam, string>> = {};
  for (const name of TRACKED_PARAMS) {
    const value = query.get(name)?.trim();
    // Ad platforms substitute macros like {{AD_ID}} server-side; an unexpanded
    // one means the platform did not fill it in, and it is noise, not a value.
    if (!value || value.startsWith("{{")) continue;
    params[name] = value.slice(0, 200);
  }

  if (Object.keys(params).length === 0) return null;

  return {
    v: ATTRIBUTION_VERSION,
    ts: now,
    ct: campaignTokenForSource(params.utm_source),
    params,
  };
}

/** Narrows unknown parsed JSON to a usable, unexpired attribution record. */
export function isFreshAttribution(value: unknown, now = Date.now()): value is Attribution {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<Attribution>;
  if (record.v !== ATTRIBUTION_VERSION) return false;
  if (typeof record.ts !== "number" || !Number.isFinite(record.ts)) return false;
  if (now - record.ts > ATTRIBUTION_MAX_AGE_MS) return false;
  return typeof record.params === "object" && record.params !== null;
}

/**
 * Chooses between what is already remembered and what this visit carries.
 *
 * First touch wins, with one exception: a stored click that maps to no campaign
 * yields to one that does. Without it a visitor who arrived from search months
 * ago and only now clicked a LinkedIn ad would install with no `ct`, and the
 * campaign that actually earned the install would report zero.
 */
export function preferredAttribution(
  stored: Attribution | null,
  current: Attribution | null,
): Attribution | null {
  if (!current) return stored;
  if (!stored) return current;
  if (!stored.ct && current.ct) return current;
  return stored;
}

/** Flattens a remembered click into PostHog event properties. */
export function attributionProperties(
  attribution: Attribution | null,
): Record<string, string | number | null> {
  if (!attribution) return { app_store_campaign: null };

  const properties: Record<string, string | number | null> = {
    app_store_campaign: attribution.ct,
    attribution_age_days: Math.floor((Date.now() - attribution.ts) / 86_400_000),
  };
  for (const [name, value] of Object.entries(attribution.params)) {
    properties[`first_touch_${name}`] = value;
  }
  return properties;
}

declare global {
  interface Window {
    /** Published by AppStoreCampaign.astro for the inline PostHog snippet. */
    summitCampaign?: {
      token: string | null;
      attribution: Attribution | null;
      properties: Record<string, string | number | null>;
    };
  }
}
