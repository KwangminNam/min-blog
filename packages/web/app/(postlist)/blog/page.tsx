import { getAllViewCount } from "@/action/data";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import { POST_PER_PAGE } from "@/constant/general";

import { getAllPostWithViewCount, getDisplayPosts } from "@/util/util";
import { Flex } from "@monorepo/ui";

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
    <Flex direction="column" gap="large">
      <PostList posts={displayPosts} isSearchModal={false} />
      <Flex justify="center" align="center">
        <Pagination totalPages={totalPages} />
      </Flex>
    </Flex>
  );
}
