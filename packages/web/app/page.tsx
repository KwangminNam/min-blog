"use client";

import { Button, Flex, Typography } from "@monorepo/ui";
import { posts } from "#site/content/blog";
import Link from "next/link";
import PostList from "@/components/PostList/post-list";
import Tag from "@/components/Tag/tag";
import { getAllTags } from "@/util/util";


import animationData from "../test.json";

export default function Home(params: any) {
  const tags = getAllTags();
  return (
    <>
      <div style={{ width: "100px", height: "100px" }}>
        123
      </div>
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
