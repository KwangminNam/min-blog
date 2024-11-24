import { posts } from "#site/content/blog";

export function getAllTags() {
  return Array.from(new Set(posts.flatMap((post) => post.postTags)));
}
