import { getAllViewCount } from "@/action/data";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import { POST_PER_PAGE } from "@/constant/general";

import { getAllPostWithViewCount, getDisplayPosts } from "@/util/post-util";
import { Flex, Typography } from "@monorepo/ui";

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
      <Typography variant="smallest">
        총 {postMappingWithViewCount.length}건
      </Typography>
      <PostList posts={displayPosts} isSearchModal={false} />
      <Flex justify="center" align="center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </Flex>
    </Flex>
  );
}
