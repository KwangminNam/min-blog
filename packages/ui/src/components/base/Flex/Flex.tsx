import React, { HTMLAttributes } from "react";
import { flexRecipe, FlexVariants } from "./flex.css";
export type FlexProps<T extends keyof JSX.IntrinsicElements = "div"> =
  HTMLAttributes<HTMLDivElement> &
    FlexVariants & {
      as?: T;
    };

export const Flex = <T extends keyof JSX.IntrinsicElements = "div">({
  as: Component = "div",
  direction,
  align,
  justify,
  wrap,
  gap,

  ...props
}: FlexProps) => {
  return (
    <Component
      className={flexRecipe({
        direction,
        align,
        justify,
        wrap,
        gap
      })}
      {...props}
    />
  );
};

export default Flex;
