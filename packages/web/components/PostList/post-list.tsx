import Tag from "@/components/Tag/tag";
import { Post } from "#site/content/blog";
import { Flex, PostItem } from "@monorepo/ui";
import Link from "next/link";
import ViewCount from "../ViewCount/view-count";
import Image from "next/image";
import { formatDate } from "@/util/util";

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
                <Flex gap="medium">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={160}
                    height={120}
                  />
                  <>
                    <PostItem.Heading>{post.title}</PostItem.Heading>
                    <Flex direction="column" gap="small">
                      <Flex gap="medium">
                        {!isSearchModal && (
                          <ViewCount
                            slug={post.slugAsParams}
                            viewCount={post.viewCount}
                            isOnlyViewCount
                          />
                        )}
                        <PostItem.Content>
                          {formatDate(post.date)}
                        </PostItem.Content>
                      </Flex>
                      <PostItem.Content css={{ color: "#94a3b8" }}>
                        {post.description}
                      </PostItem.Content>
                    </Flex>
                  </>
                </Flex>
              </Link>
              <Flex gap="small" justify="end" direction="row" wrap="wrap">
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
