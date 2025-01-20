"use client";

import Link from "next/link";
import { CircleArrowIcon, Flex, Typography } from "@monorepo/ui";
import { themeColor } from "@monorepo/ui";

interface IPostNavigationItemProps {
  slugAsParams: string;
  title: string;
  text: "이전 포스트" | "다음 포스트";
}

const PostNavigationItem: React.FC<IPostNavigationItemProps> = ({
  slugAsParams,
  title,
  text,
}) => {
  const isPreviousPost = text === "이전 포스트";
  return (
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
        className="button-link"
        style={{
          alignItems: `${isPreviousPost ? "flex-start" : "flex-end"}`,
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        href={`/blog/${slugAsParams}`}
      >
        <Flex gap="small" align="center">
          {isPreviousPost && <CircleArrowIcon size={24} direction="left" />}
          <Typography variant="small">{text}</Typography>
          <Typography variant="ellipsis">{title}</Typography>
          {!isPreviousPost && <CircleArrowIcon size={24} direction="right" />}
        </Flex>
      </Link>
    </Flex>
  );
};

export default PostNavigationItem;
