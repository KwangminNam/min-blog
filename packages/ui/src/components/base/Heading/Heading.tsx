import React from "react";
import { headingVariants } from "./heading.css";
import { IHeadingProps } from "./heading.interface";

const Heading: React.FC<IHeadingProps> = ({
  level = "h1",
  children,
  className,
  css,
  color,
}) => {
  const Component = level;

  return (
    <Component
      className={`${headingVariants[level]} ${className || ""}`}
      style={{ color, ...css }}
    >
      {children}
    </Component>
  );
};

export default Heading;
