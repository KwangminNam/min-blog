import React, { PropsWithChildren } from "react";
import { postItem } from "../post-item.css";
import Flex from "../../../base/Flex/flex";

export interface IPostItemMain {
  index: number;
}

const PostItemMain: React.FC<PropsWithChildren<IPostItemMain>> = ({
  children,
  index
}) => {
  return (
    <li
      key={`post-item-${index}`}
      className={postItem}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Flex direction="column" gap="medium">
        {children}
      </Flex>
    </li>
  );
};

export default PostItemMain;
