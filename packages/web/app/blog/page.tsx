import Pagination from "@/components/Pagination/pagination";
import PostList from "@/components/PostList/post-list";
import Tags from "@/components/Tag/tags";
import Tag from "@/components/Tag/tags";
import { getAllPosts, getAllTags } from "@/util/util";


const POST_PER_PAGE = 5;

interface IBlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: IBlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;

  const tags = getAllTags();

  const posts = getAllPosts();

  const displayPosts = posts.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE
  );

  const totalPages = Math.ceil(posts.length / POST_PER_PAGE);
  return (
    <>
      <PostList posts={displayPosts} />;
      <div>
        {tags.map((tag) => (
          <div key={tag}>
            <Tags />
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </>
  );
}
