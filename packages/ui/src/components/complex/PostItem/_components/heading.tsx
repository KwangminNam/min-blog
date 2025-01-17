import HeadingComponent from "../../../base/Heading/Heading";
import React, { PropsWithChildren } from "react";

const Heading: React.FC<PropsWithChildren> = ({ children }) => {
  return <HeadingComponent level="h2">{children}</HeadingComponent>;
};

export default Heading;
