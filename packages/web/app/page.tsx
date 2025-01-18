import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/ListDataBoundary";
import PostList from "@/components/PostList/post-list";
import { getAllPostWithViewCount } from "@/util/util";

export interface ViewCount {
  slug: string;
  viewCount: number;
}

export default async function Home() {
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount);

  console.log(postMappingWithViewCount, "postMappingWithViewCount");
  return (
    <ListDataBoundary dataLength={postMappingWithViewCount.length}>
      <PostList posts={postMappingWithViewCount} isSearchModal={false} />
    </ListDataBoundary>
  );
}
