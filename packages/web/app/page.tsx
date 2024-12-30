"use client";

import DarkModeBtn from "@/components/DarkModeButton/dark-mode-button";
import PostList from "@/components/PostList/post-list";
import { getAllPosts, getAllTags } from "@/util/util";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <PostList posts={posts} />
      <DarkModeBtn />
    </>
  );
}
