import Flex from "../../../base/Flex/Flex";
import React, { PropsWithChildren } from "react";

const ContentBody: React.FC<PropsWithChildren> = ({ children }) => {
  return <Flex direction="column">{children}</Flex>;
};

export default ContentBody;
