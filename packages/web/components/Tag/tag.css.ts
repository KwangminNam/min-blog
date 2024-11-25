import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  // 여기에 기본 스타일 추가
  padding: "4px 8px",
  borderRadius: "4px",
  backgroundColor: "blue",
});

export const tag = recipe({
  base: baseStyle,
  variants: {
    current: {
      true: {
        textDecoration: "underline",
        color: "#fff"
      },
      false: {
        textDecoration: "none",
        color: "inherit"
      }
    }
  },
  defaultVariants: {
    current: false
  }
});