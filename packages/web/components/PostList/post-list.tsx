import { postItem, postList } from "./postList.css";
import { posts } from "#site/content/blog";
import Link from "next/link";
import { Typography } from "@monorepo/ui";

const PostList: React.FC = () => {
  return (
    <>
      {!!posts.length ? (
        <ul className={postList}>
          {posts.map((post) => (
            <li key={post.slug} className={postItem}>
              <Link href={`/${post.slug}`}>{post.title}</Link>
              <Typography>{post.date}</Typography>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default PostList;
