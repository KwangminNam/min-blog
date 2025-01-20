import Flex from "../../../base/Flex/Flex";
import React, { PropsWithChildren } from "react";

const ContentBody: React.FC<PropsWithChildren> = ({ children }) => {
  return <Flex flex={1} css={{padding: '12px 0'}} direction="column">{children}</Flex>;
};

export default ContentBody;
