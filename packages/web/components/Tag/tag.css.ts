import { themeColor, vars } from "@monorepo/ui";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  borderRadius: "4px",
  color: 'black',
  backgroundColor: themeColor.color.tagColor,
  fontSize: "14px",
});

export const tag = recipe({
  base: baseStyle,
  variants: {
    strong: {
      true: {
        padding: "2px 4px",
      }
    },
    current: {
      true: {
        backgroundColor: themeColor.color.secondaryFontColor,
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
  padding: "2px 4px",
  display: "block",
  width: "100%",
});

globalStyle(`${baseStyle} a:hover, ${baseStyle} div:hover`, {
  backgroundColor: "#7C93C3",
  borderRadius: "4px",
});