import ListDataBoundary from "@/boundary/ListDataBoundary";
import PostList from "@/components/PostList/post-list";
import { getPostsByTag } from "@/util/util";

export default async function TaggedPage({
  params
}: {
  params: { tag: string };
}) {
  const postsByTag = getPostsByTag(params.tag);

  return (
    <ListDataBoundary dataLength={postsByTag.length}>
      <PostList posts={postsByTag} isSearchModal={false} />
    </ListDataBoundary>
  );
}
