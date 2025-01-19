import { Flex, Typography } from "@monorepo/ui";
import { Post } from "@/.velite";
import Link from "next/link";
import { posts } from "@/.velite";

export default function PostNavigation({ slug }: { slug: string }) {
  const currentIndex = posts.findIndex((p) => p.slugAsParams === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <Flex
      justify="between"
      css={{
        marginTop: "2rem",
        paddingTop: "2rem",
        borderTop: "1px solid $border"
      }}
    >
      {prevPost ? (
        <Flex direction="column" gap="small">
          <Typography variant="small">이전 포스트</Typography>
          <Link href={`/blog/${prevPost.slugAsParams}`}>
            <Typography variant="ellipsis">{prevPost.title}</Typography>
          </Link>
        </Flex>
      ) : (
        <div />
      )}

      {nextPost ? (
        <Flex direction="column" gap="small" css={{ textAlign: "right" }}>
          <Typography variant="small">다음 포스트</Typography>
          <Link href={`/blog/${nextPost.slugAsParams}`}>
            <Typography variant="ellipsis">{nextPost.title}</Typography>
          </Link>
        </Flex>
      ) : (
        <div />
      )}
    </Flex>
  );
}
