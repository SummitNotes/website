import { getCollection, type CollectionEntry } from "astro:content";
import { blogCategories, type BlogCategory } from "./blog-categories";

export interface BlogGroup {
  category: BlogCategory;
  posts: CollectionEntry<"blog">[];
}

export async function getBlogPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");
  return posts.sort(
    (a, b) =>
      b.data.publishedDate.getTime() - a.data.publishedDate.getTime() ||
      a.slug.localeCompare(b.slug),
  );
}

/** Preserve the date order supplied by getBlogPosts within every topic. */
export function groupBlogPosts(posts: CollectionEntry<"blog">[]): BlogGroup[] {
  return blogCategories
    .map((category) => ({
      category,
      posts: posts.filter((post) => post.data.category === category.id),
    }))
    .filter((group) => group.posts.length > 0);
}
