import HeadingComponent from "../../../base/Heading/Heading";
import React, { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <HeadingComponent
      level="h2"
      className={className}
    >
      {children}
    </HeadingComponent>
  );
};

export default Heading;
