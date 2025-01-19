import { getAllViewCount } from "@/action/data";
import ListDataBoundary from "@/boundary/ListDataBoundary";
import PostList from "@/components/PostList/post-list";
import { getAllPostWithViewCount, getPostsByTag } from "@/util/util";

export default async function TaggedPage({
  params
}: {
  params: { tag: string };
}) {
  const postsByTag = getPostsByTag(params.tag);
  const allViewCount = await getAllViewCount();
  const postMappingWithViewCount = getAllPostWithViewCount(allViewCount,postsByTag);
  
  
  return (
    <ListDataBoundary dataLength={postMappingWithViewCount.length}>
      <PostList posts={postMappingWithViewCount} isSearchModal={false} />
    </ListDataBoundary>
  );
}
