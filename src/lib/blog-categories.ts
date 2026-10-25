/** Shared by content validation, navigation, and the category pages. */
export const blogCategoryIds = [
  "regional-laws",
  "incidents-data-leaks",
  "privacy-security",
  "tools-comparisons",
  "local-ai",
  "workflows-teams",
] as const;

export type BlogCategoryId = (typeof blogCategoryIds)[number];

export interface BlogCategory {
  id: BlogCategoryId;
  label: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "regional-laws",
    label: "Regional laws",
    description: "Recording consent, biometric privacy, and AI rules across countries and US states.",
  },
  {
    id: "incidents-data-leaks",
    label: "Incidents & data leaks",
    description: "Security disclosures, recording disputes, and the lessons behind the headlines.",
  },
  {
    id: "privacy-security",
    label: "Privacy & security",
    description: "Who can access your notes, where they go, and how to protect the archive.",
  },
  {
    id: "tools-comparisons",
    label: "Tools & comparisons",
    description: "Meeting apps, changing features, and the details to check before choosing a tool.",
  },
  {
    id: "local-ai",
    label: "Local AI",
    description: "On-device intelligence, offline workflows, and keeping meeting data close.",
  },
  {
    id: "workflows-teams",
    label: "Workflows & teams",
    description: "Practical ways to capture, find, and use meeting notes in your daily work.",
  },
];

export function getBlogCategory(id: BlogCategoryId): BlogCategory {
  return blogCategories.find((category) => category.id === id)!;
}

export function blogCategoryPath(id: BlogCategoryId): string {
  return `/blog/category/${id}/`;
}
