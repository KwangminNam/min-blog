import { Button, Flex, Typography } from "@monorepo/ui";
import { posts } from "#site/content/blog";
import Link from "next/link";
import PostList from "@/components/PostList/post-list";
import Tag from "@/components/Tag/tag";

export default function Home(params: any) {
  return (
    <>
      <Tag />
      <PostList searchParams={params.searchParams} />
    </>
  );
}
