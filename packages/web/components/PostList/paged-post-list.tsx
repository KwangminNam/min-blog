import { notFound } from "next/navigation";
import type { Post } from "#site/content/blog";
import { Flex } from "@kwangmins-blog/ui";
import { POST_PER_PAGE } from "@kwangmins-blog/util";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import StreamedListViewCount from "@/components/ViewCount/streamed-list-view-count";
import { getDisplayPosts } from "@/util/post-util";

export const getTotalPages = (count: number) => Math.max(1, Math.ceil(count / POST_PER_PAGE));

/** 1..N 페이지 번호. 빌드 타임 generateStaticParams 용. */
export const getPageParams = (count: number) =>
  Array.from({ length: getTotalPages(count) }, (_, i) => String(i + 1));

/** "2" → 2. 숫자가 아니거나 범위 밖이면 404. */
export const parsePage = (raw: string, count: number) => {
  const page = Number(raw);
  if (!Number.isInteger(page) || page < 1 || page > getTotalPages(count)) {
    notFound();
  }
  return page;
};

interface IPagedPostListProps {
  posts: Post[];
  currentPage: number;
  basePath: string;
}

/**
 * 블로그/태그 목록 공용. 글 목록과 페이지네이션은 정적 데이터만 쓰므로 정적 셸에 포함되고,
 * 각 아이템의 조회수 자리만 PPR 동적 영역으로 스트리밍된다.
 */
const PagedPostList = ({ posts, currentPage, basePath }: IPagedPostListProps) => {
  const displayPosts = getDisplayPosts(currentPage, posts);

  return (
    <>
      <ListDataBoundary dataLength={displayPosts.length}>
        <PostList
          posts={displayPosts}
          renderViewCount={(post) => <StreamedListViewCount slug={post.slugAsParams} />}
        />
      </ListDataBoundary>
      <Flex justify="center" align="center">
        <Pagination
          totalPages={getTotalPages(posts.length)}
          currentPage={currentPage}
          basePath={basePath}
        />
      </Flex>
    </>
  );
};

export default PagedPostList;
