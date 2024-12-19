"use client";

import DarkModeBtn from "@/components/DarkModeButton/dark-mode-button";
import PostList from "@/components/PostList/post-list";
import Tag from "@/components/Tag/tag";
import { getAllPosts, getAllTags } from "@/util/util";
import { Input } from "@monorepo/ui";
import { useState, useTransition } from "react";
import type { Metadata } from "next";

export default function Home() {
  const tags = getAllTags();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(getAllPosts(""));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value); // 즉시 검색어 업데이트

    // 포스트 필터링은 트랜지션으로 처리
    startTransition(() => {
      setFilteredPosts(getAllPosts(value));
    });
  };

  return (
    <>
      <Input value={search} onChange={handleSearch} placeholder="Search" />
      {isPending ? <div>Searching...</div> : null}
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
