import React, { PropsWithChildren } from "react";
import { postItem } from "../post-item.css";
import Flex from "../../../base/Flex/Flex";

const PostItemMain: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className={postItem}>
      <Flex direction="column" gap="medium">
        {children}
      </Flex>
    </li>
  );
};

export default PostItemMain;
