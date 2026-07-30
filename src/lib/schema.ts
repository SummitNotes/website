/**
 * Shared JSON-LD building blocks.
 *
 * Every page emits a single `@graph` script (see Layout.astro): the Organization
 * and WebSite nodes are always present, and pages append their own nodes, which
 * reference the shared nodes by `@id` instead of repeating them.
 */

export const SITE_URL = "https://summitnotes.app";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;

export const APP_STORE_URL =
  "https://apps.apple.com/app/summit-ai-notes/id6754717420";

/** Canonical product description. Keep this in sync with the App Store listing. */
export const PRODUCT_DESCRIPTION =
  "Summit AI Notes is a private, local-first AI meeting assistant for Mac. It records online and in-person meetings without a bot, then transcribes, identifies speakers, summarizes, and makes conversations searchable using AI on the device. Recordings and transcripts stay on the user's Mac by default.";

export type SchemaNode = Record<string, unknown>;

/**
 * Turns a site-relative path into an absolute, canonical URL.
 *
 * Astro builds pages as directories (/about/index.html), so page URLs get a
 * trailing slash — that is the form the host answers with 200 rather than a
 * redirect. Paths that name a file (an image, sitemap.xml) are left alone.
 */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;

  // An extension starts with a letter, so version paths like /releases/1.9.1
  // are still treated as pages.
  const lastSegment = path.split("/").pop() ?? "";
  const isFile = /\.[a-zA-Z][a-zA-Z0-9]*$/.test(lastSegment);
  const normalized = isFile || path.endsWith("/") ? path : `${path}/`;

  return new URL(normalized, `${SITE_URL}/`).href;
}

export function organizationSchema(): SchemaNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Summit AI Notes",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo512x512.png"),
    },
    // Add the LinkedIn company page here once the URL is confirmed.
    sameAs: [APP_STORE_URL, "https://x.com/SummitAInotes"],
  };
}

export function websiteSchema(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "Summit AI Notes",
    description: PRODUCT_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export interface Crumb {
  name: string;
  /** Site-relative path. Omit for the current page (the last crumb). */
  path?: string;
}

/**
 * Builds a BreadcrumbList. `Home` is prepended automatically, so callers pass
 * only the trail below it, ending with the current page.
 */
export function breadcrumbSchema(trail: Crumb[], pagePath: string): SchemaNode {
  const crumbs: Crumb[] = [{ name: "Home", path: "/" }, ...trail];

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(pagePath)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
    })),
  };
}

interface ArticleInput {
  /** Site-relative path of the page the article lives on. */
  path: string;
  headline: string;
  description: string;
  /** Absolute or site-relative image URL. */
  image?: string;
  author?: string;
  datePublished?: Date | string;
  dateModified?: Date | string;
  keywords?: string[];
}

function toIsoDate(value: Date | string | undefined): string | undefined {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime())
    ? undefined
    : date.toISOString().slice(0, 10);
}

function articleNode(type: string, input: ArticleInput): SchemaNode {
  const url = absoluteUrl(input.path);
  const datePublished = toIsoDate(input.datePublished);
  const dateModified = toIsoDate(input.dateModified) ?? datePublished;

  return {
    "@type": type,
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
    ...(input.author
      ? { author: { "@type": "Person", name: input.author } }
      : { author: { "@id": ORGANIZATION_ID } }),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords } : {}),
  };
}

export function blogPostingSchema(input: ArticleInput): SchemaNode {
  return articleNode("BlogPosting", input);
}

export function techArticleSchema(input: ArticleInput): SchemaNode {
  return articleNode("TechArticle", input);
}
