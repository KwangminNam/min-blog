import PostList from "@/components/PostList/post-list";
import Tag from "@/components/Tag/tag";
import { getAllPosts, getAllTags } from "@/util/util";
import { Button } from "@monorepo/ui";

export default async function Page(params: any) {
  const tags = getAllTags();
  console.log(tags, "tags");
  const posts = getAllPosts();
  return (
    <>
      <PostList posts={posts} />;
      <div>
        {tags.map((tag) => (
          <div key={tag}>
            <Tag tag={tag as string} />
          </div>
        ))}
      </div>
    </>
  );
}
