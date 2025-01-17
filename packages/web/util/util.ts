import { posts } from "#site/content/blog";
import { ViewCount } from "@/app/page";


export function getAllPosts() {
  return posts
}

export function getAllPostWithViewCount(allViewCount: any) {
  const postMappingWithViewCount = posts.map((post) => {
    const viewCount = allViewCount.viewCounts?.find(
      (viewCount: ViewCount) => viewCount.slug === post.slugAsParams
    );
    return { ...post, viewCount: viewCount?.viewCount ?? 0 };
  });
  return postMappingWithViewCount;
}

export function getAllPostsBySearch(search?: string, postsToSearch = posts, isNonPostsToSearch = false) {
  return search
    ? postsToSearch.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())) ||
      post.description?.toLowerCase().includes(search.toLowerCase())
    )
    : postsToSearch;
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

