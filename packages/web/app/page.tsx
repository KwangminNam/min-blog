import { Button, Flex, Typography } from "@monorepo/ui";
import { posts } from "#site/content/blog";
import Link from "next/link";
import PostList from "@/components/PostList/post-list";
import Tag from "@/components/Tag/tag";
import { getAllTags } from "@/util/util";

export default function Home(params: any) {
  const tags = getAllTags();
  return (
    <>
      <PostList searchParams={params.searchParams} />
      <div id="test">
        {tags.map((tag) => (
          <div key={tag}>
            <Tag tag={tag as string} />
          </div>
        ))}
      </div>
    </>
  );
}
