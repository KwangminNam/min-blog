"use client";

import Link from "next/link";
import { CircleArrowIcon, Flex, Typography, vars } from "@kwangmins-blog/ui";
import { themeColor } from "@kwangmins-blog/ui";
import { APP_PATH } from "@/constant/appPath";

interface IPostNavigationItemProps {
  slugAsParams: string;
  title: string;
  text: "이전 포스트" | "다음 포스트";
}

const PostNavigationItem: React.FC<IPostNavigationItemProps> = ({
  slugAsParams,
  title,
  text
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
        border: `1px solid ${themeColor.color.borderColor}`
      }}
    >
      <Link
        className="button-link"
        style={{
          alignItems: `${isPreviousPost ? "flex-start" : "flex-end"}`
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        href={`/${APP_PATH.blog}/${slugAsParams}`}
      >
        <Flex gap="small" align="center">
          {isPreviousPost && (
            <CircleArrowIcon
              color={vars.color.white}
              size={19}
              direction="left"
            />
          )}
          <Typography
            css={{ color: themeColor.color.buttonTextColor }}
            variant="ellipsis"
          >
            {title}
          </Typography>
          {!isPreviousPost && (
            <CircleArrowIcon
              color={vars.color.white}
              size={19}
              direction="right"
            />
          )}
        </Flex>
      </Link>
    </Flex>
  );
};

export default PostNavigationItem;
