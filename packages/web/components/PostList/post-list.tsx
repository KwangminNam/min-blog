"use client";

import { postItem, postList } from "./postList.css";
import { posts } from "#site/content/blog";
import Link from "next/link";
import { Typography } from "@monorepo/ui";
import { useMemo } from "react";

const PostList: React.FC<{ searchParams: any }> = ({ searchParams }) => {
  console.log(searchParams, "searchParams");

  const filteredPosts = useMemo(() => {
    return searchParams?.tag
      ? posts.filter((post) => post.postTags === searchParams.tag)
      : posts;
  }, [searchParams?.tag]);

  return (
    <main>
      <section>
        {!!filteredPosts.length ? (
          <ul className={postList}>
            {filteredPosts.map((post) => (
              <li key={post.slug} className={postItem}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                <Typography>{post.date}</Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Typography>No posts found.</Typography>
        )}
      </section>
    </main>
  );
};

export default PostList;
