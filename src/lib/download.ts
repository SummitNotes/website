/**
 * The two ways to get Summit, and the page that lets visitors pick one.
 *
 * Every Download button on the English site points at /download rather than
 * straight at a store, carrying the button's name as `from` so the click that
 * finally leaves the page can still be attributed to the button that started
 * it (see posthog.astro). Pages load in full on this static site, so a query
 * parameter is the only thing that survives the hop for visitors without
 * analytics consent.
 *
 * The language landing pages keep linking to their localized App Store
 * storefront: the download page is English-only.
 */

export const APP_STORE_URL =
  "https://apps.apple.com/app/summit-ai-notes/id6754717420?l=en-GB&mt=12";

const RELEASES_API =
  "https://license.dmitriyrozhkov.com/api/v1/releases/summit-ai-mac";

const DIRECT_QUERY = "platform=darwin-arm64&channel=stable";

/**
 * Permanent link to the newest direct build. The license server answers with
 * a redirect to a short-lived signed storage URL, so this never goes stale.
 */
export const DIRECT_DOWNLOAD_URL = `${RELEASES_API}/latest/download?${DIRECT_QUERY}`;

/** Metadata of the newest direct build: version, date, size, checksum. */
export const LATEST_RELEASE_API = `${RELEASES_API}/latest?${DIRECT_QUERY}`;

/** Link to the download page, tagged with the button that led there. */
export function downloadPagePath(source: string): string {
  return `/download?from=${encodeURIComponent(source)}`;
}
