import Tag from "@/components/Tag/tag";
import { Post } from "#site/content/blog";
import { Flex, PostItem, themeColor } from "@monorepo/ui";
import Link from "next/link";
import ViewCount from "../ViewCount/view-count";
import Image from "next/image";
import { formatDate } from "@/util/post-util";;

const PostList: React.FC<{ posts: Post[]; isSearchModal: boolean }> = ({
  posts,
  isSearchModal,
}) => {
  return (
    <main>
      <section>
        <ul>
          {posts.map((post, index) => (
            <PostItem key={post.slug} index={index}>
              <Link href={`/${post.slug}`} >
                <Flex gap="medium">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBAB  bWyZJf74GZgAAAABJRU5ErkJggg=="
                    width={170}
                    height={130}
                  />
                  <Flex direction="column" gap="small">
                    <PostItem.Heading className="ellipsis is-hover">
                      {post.title}
                    </PostItem.Heading>
                    <Flex direction="column" gap="small">
                      <Flex gap="medium">
                        {!isSearchModal && (
                          <ViewCount
                            slug={post.slugAsParams}
                            viewCount={post.viewCount}
                            isOnlyViewCount
                          />
                        )}
                        <PostItem.Content
                          variant="smallest"
                          css={{ color: themeColor.color.secondaryFontColor }}
                        >
                          {formatDate(post.date)}
                        </PostItem.Content>
                      </Flex>
                      <PostItem.Content
                        className="is-hover"
                        // css={{ color: themeColor.color.thirdFontColor }}
                      >
                        {post.description}
                      </PostItem.Content>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="small" justify="end" direction="row" wrap="wrap">
                {post.tags?.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </Flex>
              </Link>
              
            </PostItem>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PostList;
