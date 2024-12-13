"use client";

import DarkModeBtn from "@/components/DarkModeButton/dark-mode-button";
import PostList from "@/components/PostList/post-list";
import Tag from "@/components/Tag/tag";
import { getAllTags } from "@/util/util";

export default function Home() {
  const tags = getAllTags();
  return (
    <>
      <PostList />
      <DarkModeBtn />
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
