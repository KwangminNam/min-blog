import { Suspense } from "react";
import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import PostListSkeleton from "@/components/PostList/post-list-skeleton";
import TotalCount from "@/components/TotalCount/total-count";
import { POST_PER_PAGE } from "@kwangmins-blog/util";
import { getAllPostWithViewCount, getDisplayPosts, posts } from "@/util/post-util";
import { Flex } from "@kwangmins-blog/ui";

interface IBlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

/** searchParams 와 조회수에 의존하는 동적 영역. */
async function PagedPostList({ searchParams }: IBlogPageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);
  const displayPosts = getDisplayPosts(currentPage, postMappingWithViewCount);
  const totalPages = Math.ceil(postMappingWithViewCount.length / POST_PER_PAGE);

  return (
    <>
      <ListDataBoundary dataLength={displayPosts.length}>
        <PostList posts={displayPosts} />
      </ListDataBoundary>
      <Flex justify="center" align="center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </Flex>
    </>
  );
}

export default function BlogPage({ searchParams }: IBlogPageProps) {
  return (
    <Flex direction="column" gap="medium" css={{ width: "100%" }}>
      {/* 전체 글 수는 빌드 타임에 확정되므로 정적 셸에 포함된다. */}
      <TotalCount totalCount={posts.length} />
      <Suspense fallback={<PostListSkeleton count={POST_PER_PAGE} />}>
        <PagedPostList searchParams={searchParams} />
      </Suspense>
    </Flex>
  );
}
