import { themeColor } from "@monorepo/ui";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  // padding: "4px 8px",
  borderRadius: "4px",
  backgroundColor: themeColor.color.tagColor,

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

globalStyle(`${baseStyle} a, ${baseStyle} div`, {
  textDecoration: 'none',
  color: 'inherit',
  padding: "4px 8px",
  display: "block",
  width: "100%",
});

globalStyle(`${baseStyle} a:hover, ${baseStyle} div:hover`, {
  backgroundColor: "#FFB088",
});