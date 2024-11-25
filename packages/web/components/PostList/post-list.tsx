"use client";

import { postItem, postList } from "./postList.css";
import { posts } from "#site/content/blog";
import Link from "next/link";
import { Typography } from "@monorepo/ui";
import { useMemo } from "react";
import PostItem from "../PostItem/post-item";

const PostList: React.FC<{ searchParams: any }> = ({ searchParams }) => {
  // const filteredPosts = useMemo(() => {
  //   return searchParams?.tag
  //     ? posts.filter((post) => post.postTags === searchParams.tag)
  //     : posts;
  // }, [searchParams?.tag]);

  return (
    <main>
      <section>
        {!!posts.length ? (
          <ul className={postList}>
            {posts.map((post) => (
              <PostItem
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
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
