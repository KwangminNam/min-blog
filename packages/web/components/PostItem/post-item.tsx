import Link from "next/link";

import { Flex, Heading, Typography } from "@monorepo/ui";
import { IPostItemProps } from "./postItem.interface";
import { postItem } from "./post-item.css";
import Tag from "../Tag/tag";

const PostItem: React.FC<IPostItemProps> = ({
  slug,
  title,
  description,
  date,
  tags,
  viewCount
}) => {
  return (
    <li key={slug} className={postItem}>
      <Flex direction="column" gap="medium">
        <Flex>
          <Link href={`/${slug}`}>
            <Heading level="h2">{title}</Heading>
            <Flex direction="column" gap="medium">
              <Typography variant="small">조회수 {viewCount}</Typography>
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
