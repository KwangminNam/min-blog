import { getAllViewCount } from "@/action/data";
import PostList from "@/components/PostList/post-list";
import { getAllPosts, getAllPostWithViewCount } from "@/util/util";

export interface ViewCount {
  slug: string;
  viewCount: number;
}

export default async function Home() {
  const allViewCount = await getAllViewCount();
  const posts = getAllPosts();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);
  return (
    <>
      <PostList isSearchModal={false} posts={postMappingWithViewCount} />
    </>
  );
}
