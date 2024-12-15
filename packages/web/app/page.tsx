"use client";

import DarkModeBtn from "@/components/DarkModeButton/dark-mode-button";
import PostList from "@/components/PostList/post-list";
import Tag from "@/components/Tag/tag";
import { getAllPosts, getAllTags } from "@/util/util";
import { Input } from "@monorepo/ui";
import { posts } from "#site/content/blog";
import { useState } from "react";

export default function Home() {
  const tags = getAllTags();

  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredPosts = getAllPosts(search);

  return (
    <>
      <Input value={search} onChange={handleSearch} />
      <PostList posts={filteredPosts} />
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
