import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";

import { getAllPosts, getDisplayPosts } from "@/util/util";

const POST_PER_PAGE = 5;

interface IBlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: IBlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;

  const posts = getAllPosts();
  const displayPosts = getDisplayPosts(currentPage, POST_PER_PAGE);

  const totalPages = Math.ceil(posts.length / POST_PER_PAGE);
  return (
    <>
      <PostList posts={displayPosts} isSearchModal={false} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
