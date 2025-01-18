import React, { PropsWithChildren } from "react";
import { postItem } from "../post-item.css";
import Flex from "../../../base/Flex/Flex";

interface IPostItemMain {
  index: number;
}

const PostItemMain: React.FC<PropsWithChildren<IPostItemMain>> = ({
  children,
  index
}) => {
  return (
    <li className={postItem} style={{ animationDelay: `${index * 0.1}s` }}>
      <Flex direction="column" gap="medium">
        {children}
      </Flex>
    </li>
  );
};

export default PostItemMain;
