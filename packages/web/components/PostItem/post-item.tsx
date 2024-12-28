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
  tags
}) => {
  return (
    <li key={slug} className={postItem}>
      <Flex>
        <Link href={`/${slug}`}>
          <Heading level="h2">{title}</Heading>
          <Typography variant="small">{date}</Typography>
          <Typography variant="small">{description}</Typography>
        </Link>
        <span>더 보기</span>
      </Flex>
      <Flex gap="medium">
        {tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </Flex>
    </li>
  );
};

export default PostItem;
