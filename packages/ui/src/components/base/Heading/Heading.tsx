import React from "react";
import { headingVariants } from "./heading.css";
import { IHeadingProps } from "./heading.interface";

export const Heading = ({
  level = "h1",
  children,
  className,
  color
}: IHeadingProps) => {
  const Component = level;

  return (
    <Component
      className={`${headingVariants[level]} ${className || ""}`}
      style={{ color }}
    >
      {children}
    </Component>
  );
};
