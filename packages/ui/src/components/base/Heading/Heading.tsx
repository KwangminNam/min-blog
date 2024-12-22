import React from "react";
import { headingVariants } from "./heading.css";
import { THeadingLevel } from "./heading.interface";
interface IHeadingProps {
  level?: THeadingLevel;
  children: React.ReactNode;
  color?: string;
  className?: string;
}

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
