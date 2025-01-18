import Tag from "@/components/Tag/tag";
import { Post } from "#site/content/blog";
import { Flex, PostItem } from "@monorepo/ui";
import Link from "next/link";
import ViewCount from "../ViewCount/view-count";

const PostList: React.FC<{ posts: Post[]; isSearchModal: boolean }> = ({
  posts,
  isSearchModal
}) => {
  return (
    <main>
      <section>
        <ul>
          {posts.map((post, index) => (
            <PostItem key={post.slug} index={index}>
              <Link href={`/${post.slug}`}>
                <PostItem.Heading>{post.title}</PostItem.Heading>
                <Flex direction="column" gap="medium">
                  {!isSearchModal && (
                    <ViewCount
                      slug={post.slugAsParams}
                      viewCount={post.viewCount}
                    />
                  )}
                  <PostItem.Content>{post.date}</PostItem.Content>
                  <PostItem.Content>{post.description}</PostItem.Content>
                </Flex>
              </Link>
              <Flex gap="medium">
                {post.tags?.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </Flex>
            </PostItem>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PostList;
