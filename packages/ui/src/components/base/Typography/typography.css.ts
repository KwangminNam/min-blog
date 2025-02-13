
import { themeColor, vars } from "../../../styles/global.css";
import { recipe } from "@vanilla-extract/recipes";

export const typography = recipe({
  base: {
    fontFamily: 'Inter, sans-serif',
    selectors: {
      '&.nav': {
        color: themeColor.color.navFontColor,
      },
      '&.is-active': {
        color: themeColor.color.navActiveFontColor,
      }
    }
  },
  variants: {
    variant: {
      ellipsis: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: vars.size.box[100],
        display: 'block'
      },
      large: {
        fontSize: vars.size.rem[2],

      },
      medium: {
        fontSize: vars.size.rem[1.5],
      },
      small: {
        fontSize: vars.size.rem[1],

      },
      smallest: {
        fontSize: vars.size.rem[0.85],
      }
    }
  }
})