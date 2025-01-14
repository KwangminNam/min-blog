import PostItem from "@/components/PostItem/post-item";
import { getAllTags, getPostsByTag } from "@/util/util";

export default async function TaggedPage({
  params
}: {
  params: { tag: string };
}) {
  const postsByTag = getPostsByTag(params.tag);

  return (
    <>
      <ul>
        {postsByTag.map((post) => (
          <PostItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </ul>
    </>
  );
}
