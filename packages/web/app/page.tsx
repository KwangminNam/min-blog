"use client";

import DarkModeBtn from "@/components/DarkModeButton/dark-mode-button";
import PostList from "@/components/PostList/post-list";
import { getAllPosts, getAllTags } from "@/util/util";
import { useState, useTransition } from "react";
import SearchInput from "@/components/SearchInput/search-input";

export default function Home() {
  const posts = getAllPosts();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    startTransition(() => {
      setFilteredPosts(getAllPosts(value));
    });
  };

  return (
    <>
      <SearchInput value={search} onChange={handleSearch} />
      {isPending ? <div>Searching...</div> : null}
      <PostList posts={filteredPosts} />
      <DarkModeBtn />
    </>
  );
}
