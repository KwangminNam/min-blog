import { getAllViewCount } from "@/action/data";
import PostList from "@/components/PostList/post-list";
import { getAllPosts } from "@/util/util";

interface ViewCount {
  slug: string;
  viewCount: number;
}
export const revalidate = 3;

export default async function Home() {
  const posts = getAllPosts();

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
