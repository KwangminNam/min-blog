import HeadingComponent from "../../../base/Heading/heading";
import React, { type PropsWithChildren } from "react";

export interface HeadingProps extends PropsWithChildren {
  className?: string;
}

const PostHeading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <HeadingComponent
      level="h2"
      className={className}
    >
      {children}
    </HeadingComponent>
  );
};

export default PostHeading;
