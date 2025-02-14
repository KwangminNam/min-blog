import Tag from "@/components/Tag/tag";
import { Post } from "#site/content/blog";
import { Flex, PostItem, Typography } from "@monorepo/ui";
import Link from "next/link";
import ViewCount from "../ViewCount/view-count";
import { formatDate } from "@/util/post-util";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/constant/general";

const PostList: React.FC<{
  posts: Post[];
  isSearchModal?: boolean;
  isTopMostViewed?: boolean;
  onClick?: () => void;
}> = ({ posts, isSearchModal, isTopMostViewed = false, onClick }) => {
  return (
    <main
      style={{
        overflow: isSearchModal ? "scroll" : "unset",
        height: isSearchModal ? "250px" : "unset"
      }}
    >
      <section>
        <ul style={{ width: "100%" }}>
          {posts.map((post, index) => (
            <PostItem key={post.slug} index={index}>
              <Link
                href={`/${post.slug}`}
                onClick={onClick}
                className="is-post-link"
              >
                <Flex gap="medium">
                  {isTopMostViewed && (
                    <Typography css={{ width: "20px" }} variant="medium">
                      {index + 1}.
                    </Typography>
                  )}
                  <Image
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    style={{ borderRadius: "8px" }}
                    src={
                      process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT +
                      `/${post.thumbnail}`
                    }
                    alt={post.title}
                    width={100}
                    height={75}
                  />
                  <Flex direction="column" gap="smallest">
                    <Flex gap="medium">
                      {!isSearchModal && (
                        <ViewCount
                          slug={post.slugAsParams}
                          viewCount={post.viewCount}
                          isOnlyViewCount
                        />
                      )}
                      <PostItem.Content variant="smallest">
                        {formatDate(post.date)}
                      </PostItem.Content>
                    </Flex>
                    <PostItem.Heading className="ellipsis">
                      {post.title}
                    </PostItem.Heading>
                    <Flex direction="column" gap="small">
                      <PostItem.Content className="ellipsis">
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
