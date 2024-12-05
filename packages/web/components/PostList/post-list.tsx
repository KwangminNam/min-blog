"use client";

import { postList } from "./postList.css";
import { posts } from "#site/content/blog";
import { Typography } from "@monorepo/ui";
import PostItem from "../PostItem/post-item";

const PostList: React.FC = () => {
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
