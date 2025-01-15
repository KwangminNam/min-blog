import { postList } from "./post-list.css";
import { Post } from "#site/content/blog";
import { Typography } from "@monorepo/ui";
import PostItem from "../PostItem/post-item";

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  console.log(posts);
  return (
    <main>
      <section>
        {!!posts.length ? (
          <ul className={postList}>
            {posts.map((post, index) => (
              <PostItem
                key={post.slug}
                slug={post.slug}
                slugAsParams={post.slugAsParams}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                viewCount={post.viewCount}
                index={index}
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
