import { getCollection, type CollectionEntry } from "astro:content";

const categoryLabels: Record<string, string> = {
  settings: "Settings",
  setup: "Get Started",
  recording: "Record and Transcribe",
  library: "Work with Your Notes",
  integrations: "Connect and Export",
  help: "Help",
  guides: "User Guides",
  general: "General",
};

/** The order categories appear in the docs sidebar. */
const categoryOrder = ["setup", "recording", "library", "integrations", "settings", "guides", "general", "help"];

export interface DocsCategory {
  category: string;
  label: string;
  docs: CollectionEntry<"docs">[];
}

export function categoryLabel(category: string): string {
  return categoryLabels[category] ?? category;
}

/** Docs grouped by category, categories in sidebar order, docs by `order`. */
export async function getDocsByCategory(): Promise<DocsCategory[]> {
  const allDocs = await getCollection("docs");
  return categoryOrder
    .map((category) => ({
      category,
      label: categoryLabel(category),
      docs: allDocs
        .filter((doc) => (doc.data.category || "guides") === category)
        .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999) || a.data.title.localeCompare(b.data.title)),
    }))
    .filter((group) => group.docs.length > 0);
}
