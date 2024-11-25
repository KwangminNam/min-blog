import { posts } from "#site/content/blog";

export async function getPostBySlug(slug: string) {
  return posts.find((post) => post.slugAsParams === slug);
}

export function getPostsByTag(tag: string) {
  return posts.filter((post) => post.tags?.includes(tag));
}

export function getAllTags() {
  return Array.from(
    new Set(
      posts
        .filter(post => post.tags)
        .flatMap(post => post.tags ?? [])
    )
  );
}
