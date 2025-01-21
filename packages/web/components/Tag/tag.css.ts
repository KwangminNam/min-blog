import { themeColor, vars } from "@monorepo/ui";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  // padding: "4px 8px",
  borderRadius: "4px",
  color: 'black',
  backgroundColor: themeColor.color.tagColor,

});

export const tag = recipe({
  base: baseStyle,
  variants: {
    strong: {
      true: {
        padding: "4px 8px",
      }
    },
    current: {
      true: {
        backgroundColor: "#55679C",
        color: vars.color.black,
        fontWeight: "bold"
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
  backgroundColor: "#7C93C3",
  borderRadius: "4px",
});