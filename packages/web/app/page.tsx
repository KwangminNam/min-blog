import { getAllViewCount } from "@/action/data";
import PostList from "@/components/PostList/post-list";
import { getAllPostWithViewCount } from "@/util/util";

export interface ViewCount {
  slug: string;
  viewCount: number;
}

export default async function Home() {
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);
  return (
    <>
      <PostList isSearchModal={false} posts={postMappingWithViewCount} />
    </>
  );
}
