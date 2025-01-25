import { Post, posts as allPosts } from "#site/content/blog";
import { ViewCount } from "@/app/page";
import { POST_PER_PAGE } from "@/constant/general";


export function filterPublishedPosts(posts: Post[]) {
  return posts.filter((post) => post.published);
}

export function sortPostsByDate(posts: Post[]) {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPosts() {
  return sortPostsByDate(filterPublishedPosts(allPosts));
}

export const posts = getAllPosts();

export function getAllPostWithViewCount(allViewCount: any, postsToMap = posts) {
  const postMappingWithViewCount = postsToMap.map((post) => {
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
      post.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
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
  const directoryTags = posts.flatMap(post => {
    const pathParts = post.slug.split("/");
    return pathParts.slice(1, -1);
  });

  const postTags = posts
    .filter(post => post.tags)
    .flatMap(post => post.tags ?? []);

  return Array.from(new Set([...directoryTags, ...postTags]));
}

export function getDisplayPosts(currentPage: number, postsToDisplay = posts) {
  return postsToDisplay.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE
  );
}

export function getTopMostViewedPosts(posts: Post[]) {
  return [...posts]
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, POST_PER_PAGE);
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}




