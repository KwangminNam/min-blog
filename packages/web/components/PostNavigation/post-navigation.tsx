"use client";

import { Flex, themeColor, Typography } from "@monorepo/ui";
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
      gap="medium"
      css={{
        marginTop: "4rem",
        borderTop: "1px solid $border",
      }}
    >
      {prevPost ? (
        <Flex
          direction="column"
          gap="small"
          flex={1}
          align="center"
          css={{
            backgroundColor: themeColor.color.buttonBackground,
            border: "1px solid #fff",
          }}
        >
          <Link
            style={{
              display: "block",
              width: "100%",
              padding: "1.5rem",
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            href={`/blog/${prevPost.slugAsParams}`}
          >
            <Typography variant="small">이전 포스트</Typography>
            <Typography variant="ellipsis">{prevPost.title}</Typography>
          </Link>
        </Flex>
      ) : (
        <div />
      )}

      {nextPost ? (
        <Flex
          flex={1}
          direction="column"
          gap="small"
          align="center"
          css={{
            border: "1px solid #fff",
            backgroundColor: themeColor.color.buttonBackground,
          }}
        >
          <Link
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            href={`/blog/${nextPost.slugAsParams}`}
          >
            <Typography variant="small">다음 포스트</Typography>
            <Typography variant="ellipsis">{nextPost.title}</Typography>
          </Link>
        </Flex>
      ) : (
        <div />
      )}
    </Flex>
  );
}
