import { Post, posts as allPosts } from "#site/content/blog";
import type { ViewCount } from "@/action/data";
import { POST_PER_PAGE } from "@kwangmins-blog/util";
import { slug } from "github-slugger";

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

export function getAllPostWithViewCount(allViewCount: ViewCount[], postsToMap = posts) {
  const viewCountBySlug = new Map(allViewCount.map(({ slug, viewCount }) => [slug, viewCount]));
  return postsToMap.map((post) => ({
    ...post,
    viewCount: viewCountBySlug.get(post.slugAsParams) ?? 0,
  }));
}

export function getAllPostsBySearch(search?: string, postsToSearch = posts) {
  return search
    ? postsToSearch.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    )
    : postsToSearch;
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slugAsParams === slug);
}

/** URL 경로의 태그(한글은 인코딩되어 올 수 있음)를 원래 문자열로 되돌린다. */
export function decodeTagParam(tagParam: string) {
  try {
    return decodeURIComponent(tagParam);
  } catch {
    return tagParam;
  }
}

/**
 * 태그 링크는 slug(소문자/공백→하이픈)로 만들어지므로, 비교도 같은 slug 규칙으로 한다.
 * 예전에는 원래 문자열과 그대로 비교해 "AI", "Next.js", 한글 태그 페이지가 비어 있었다.
 */
export function getPostsByTag(tagParam: string) {
  const target = slug(decodeTagParam(tagParam));
  return posts.filter((post) => post.tags?.some((tag) => slug(tag) === target));
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




