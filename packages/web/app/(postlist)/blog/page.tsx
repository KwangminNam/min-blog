import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/list-data-boundary";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import TotalCount from "@/components/TotalCount/total-count";
import { POST_PER_PAGE } from "@kwangmins-blog/util";

import { getAllPostWithViewCount, getDisplayPosts } from "@/util/post-util";
import { Flex } from "@kwangmins-blog/ui";

interface IBlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: IBlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);
  const displayPosts = getDisplayPosts(currentPage, postMappingWithViewCount);

  const totalPages = Math.ceil(postMappingWithViewCount.length / POST_PER_PAGE);
  return (
    <Flex direction="column" gap="medium" css={{ width: "100%" }}>
      <TotalCount totalCount={postMappingWithViewCount.length} />
      <ListDataBoundary dataLength={displayPosts.length}>
        <PostList posts={displayPosts} />
      </ListDataBoundary>
      <Flex justify="center" align="center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </Flex>
    </Flex>
  );
}
