import { posts } from "#site/content/blog";


export function getAllPosts(search?: string) {
  return search
    ? posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())) ||
      post.description?.toLowerCase().includes(search.toLowerCase())
    )
    : posts;
}

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

export function getDisplayPosts(currentPage: number, POST_PER_PAGE: number) {
  return posts.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE
  );
}
