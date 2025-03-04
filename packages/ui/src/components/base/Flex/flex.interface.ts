import { RecipeVariants } from "@vanilla-extract/recipes";
import { flexRecipe } from "./flex.css";
import type { CSSProperties } from "react";

export type TFlexVariants = RecipeVariants<typeof flexRecipe>;

export type TFlexProps = TFlexVariants & {
  css?: CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;