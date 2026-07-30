import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { absoluteUrl } from "../lib/schema";
import { releases } from "../lib/releases";

/**
 * Prerendered XML sitemap served at /sitemap.xml.
 *
 * Routes are discovered from the file system and the content collections, so new
 * pages, blog posts, docs, and release notes are picked up automatically.
 */

// Routes that exist but should stay out of search results: the 404 page, the
// internal style demo, and the fixed-width pages used only to shoot screenshots.
const EXCLUDED = [/^\/404$/, /^\/demo-styles$/, /^\/use-cases\/screenshots\//];

function staticRoutes(): string[] {
  const pages = import.meta.glob("./**/*.astro");

  return Object.keys(pages)
    .map((path) =>
      path
        .replace(/^\./, "")
        .replace(/\.astro$/, "")
        .replace(/\/index$/, ""),
    )
    .map((route) => route || "/")
    // Dynamic routes ([...slug]) are expanded from their collections below.
    .filter((route) => !route.includes("["))
    .filter((route) => !EXCLUDED.some((pattern) => pattern.test(route)));
}

interface SitemapEntry {
  path: string;
  lastmod?: string;
}

function toIsoDate(value: Date | string | undefined): string | undefined {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime())
    ? undefined
    : date.toISOString().slice(0, 10);
}

export const GET: APIRoute = async () => {
  const [blogPosts, docs] = await Promise.all([
    getCollection("blog"),
    getCollection("docs"),
  ]);

  const entries: SitemapEntry[] = [
    ...staticRoutes().map((path) => ({ path })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastmod: toIsoDate(post.data.publishedDate),
    })),
    ...docs.map((doc) => ({
      path: `/docs/${doc.slug}`,
      lastmod: toIsoDate(doc.data.lastUpdated),
    })),
    ...releases.map((release) => ({
      path: release.url,
      lastmod: toIsoDate(release.date),
    })),
  ];

  // Home first, then alphabetical, so the file stays readable and diffs stay small.
  const seen = new Set<string>();
  const urls = entries
    .filter((entry) => !seen.has(entry.path) && seen.add(entry.path))
    .sort((a, b) => {
      if (a.path === "/") return -1;
      if (b.path === "/") return 1;
      return a.path.localeCompare(b.path);
    })
    .map(({ path, lastmod }) => {
      const loc = `    <loc>${absoluteUrl(path)}</loc>`;
      const modified = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
      return `  <url>\n${loc}${modified}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
