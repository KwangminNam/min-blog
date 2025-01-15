import Link from "next/link";

import { Flex, Heading, Typography } from "@monorepo/ui";
import { IPostItemProps } from "./postItem.interface";
import { postItem } from "./post-item.css";
import Tag from "../Tag/tag";
import { getPostBySlug } from "@/util/util";
import { getViewCountAction } from "@/action/action";
import { Suspense } from "react";
import ViewCount from "../ViewCount/view-count";

const PostItem: React.FC<IPostItemProps> = async ({
  slug,
  title,
  description,
  slugAsParams,
  index,
  date,
  tags,
  viewCount
}) => {
  const initialViews = await getViewCountAction(slugAsParams ?? "");
  return (
    <li
      key={slug}
      className={postItem}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Flex direction="column" gap="medium">
        <Flex>
          <Link href={`/${slug}`}>
            <Heading level="h2">{title}</Heading>
            <Flex direction="column" gap="medium">
              <Suspense fallback={<div>Loading...</div>}>
                <ViewCount slug={slug} isOnlyViewCount />
              </Suspense>
              <Typography variant="small">{date}</Typography>
              <Typography variant="small">{description}</Typography>
            </Flex>
          </Link>
        </Flex>
        <Flex gap="medium">
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </Flex>
      </Flex>
    </li>
  );
};

export default PostItem;
