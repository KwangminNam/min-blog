import { getAllViewCount } from "@/action/data";
import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";

import {  getAllPostWithViewCount, getDisplayPosts } from "@/util/util";

const POST_PER_PAGE = 3;

interface IBlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: IBlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);
  const displayPosts = getDisplayPosts(currentPage, POST_PER_PAGE, postMappingWithViewCount);

  const totalPages = Math.ceil(postMappingWithViewCount.length / POST_PER_PAGE);
  return (
    <>
      <PostList posts={displayPosts} isSearchModal={false} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
