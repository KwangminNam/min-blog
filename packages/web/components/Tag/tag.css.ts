import { themeColor, vars } from "@kwangmins-blog/ui";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  borderRadius: "4px",
  color: vars.color.black,
  backgroundColor: themeColor.color.tagColor,
  fontSize: vars.font.size.px[13],
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.font.size.px[11],
    },
    'screen and (max-width: 480px)': {
      fontSize: vars.font.size.px[10],
    }
  }
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