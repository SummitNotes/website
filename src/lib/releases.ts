/**
 * Every release note under src/pages/releases, newest first.
 *
 * Adding a new <version>.mdx file there surfaces it in the release notes index,
 * the sitemap, and the homepage `softwareVersion` with no further edits.
 */

const releaseModules = import.meta.glob("../pages/releases/*.mdx", {
  eager: true,
});

export interface ReleaseEntry {
  slug: string;
  url: string;
  version: string;
  date?: string;
  title: string;
}

export const releases: ReleaseEntry[] = Object.entries(releaseModules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.mdx$/, "");
    const m = mod as { version?: string; date?: string; title?: string };
    return {
      slug,
      url: `/releases/${slug}`,
      version: m.version ?? slug,
      date: m.date,
      title: m.title ?? `Summit AI Notes ${m.version ?? slug}`,
    };
  })
  .filter((r) => !r.slug.startsWith("_"))
  .sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

/** The most recently dated release, used as the current `softwareVersion`. */
export const latestRelease: ReleaseEntry | undefined = releases[0];
