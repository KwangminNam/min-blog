import { Button, Flex, Typography } from "@monorepo/ui";
import { posts } from "#site/content/blog";
import Link from "next/link";
import PostList from "@/components/PostList/post-list";

export default function Home(params: any) {
  return (
    <>
      <PostList searchParams={params.searchParams} />
    </>
  );
}
