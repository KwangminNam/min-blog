import PostItem from "@/components/PostItem/post-item";
import Tag from "@/components/Tag/tag";
import { getAllTags, getPostsByTag } from "@/util/util";
import { slug } from "github-slugger";

export default async function TaggedPage({
  params
}: {
  params: { tag: string };
}) {
  const postsByTag = getPostsByTag(params.tag);
  const currentTag = params.tag;
  const tags = getAllTags();
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
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Tag
              tag={tag as string}
              currentTag={currentTag === slug(tag as string)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
