import HeadingComponent from "../../../base/Heading/Heading";
import React, { PropsWithChildren } from "react";

const Heading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeadingComponent
      css={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "430px"
      }}
      level="h2"
    >
      {children}
    </HeadingComponent>
  );
};

export default Heading;
