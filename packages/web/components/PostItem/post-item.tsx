import Link from "next/link";

import { Flex, Heading, Typography } from "@monorepo/ui";
import { IPostItemProps } from "./postItem.interface";
import { postItem } from "./post-item.css";
import Tag from "../Tag/tag";
import { memo, Suspense } from "react";
import ViewCount from "../ViewCount/view-count";

const PostItem: React.FC<IPostItemProps> = ({
  slug,
  title,
  description,
  slugAsParams,
  index,
  isSearchModal,
  date,
  tags,
  viewCount,
}) => {
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
              {!isSearchModal && (
                <ViewCount slug={slug} viewCount={viewCount} isOnlyViewCount />
              )}
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

export default memo(PostItem);
