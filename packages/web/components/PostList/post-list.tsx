import Tag from "@/components/Tag/tag";
import { Post } from "#site/content/blog";
import { Flex, PostItem, themeColor, Typography } from "@monorepo/ui";
import Link from "next/link";
import ViewCount from "../ViewCount/view-count";
import Image from "next/image";
import { formatDate } from "@/util/post-util";
import { BLUR_DATA_URL } from "@/constant/general";

const PostList: React.FC<{
  posts: Post[];
  isSearchModal: boolean;
  isTopMostViewed?: boolean;
}> = ({ posts, isSearchModal, isTopMostViewed = false }) => {
  return (
    <main>
      <section>
        <ul style={{ width: "100%" }}>
          {posts.map((post, index) => (
            <PostItem key={post.slug} index={index}>
              <Link href={`/${post.slug}`}>
                <Flex gap="medium">
                  {isTopMostViewed && (
                    <Typography css={{ width: "70px" }} variant="medium">
                      {index + 1}.
                    </Typography>
                  )}
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
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
