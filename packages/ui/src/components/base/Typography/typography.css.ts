
import { themeColor } from "../../../styles/global.css";
import { recipe } from "@vanilla-extract/recipes";

export const typography = recipe({
  base: {
    fontFamily: 'Inter, sans-serif',
    selectors: {
      '&.nav': {
        color: '#55679C',
      },
      '&.is-active': {
        color: themeColor.color.mainFontColor,
      }
    }
  },
  variants: {
    variant: {
      ellipsis: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100px',
        display: 'block'
      },
      large: {
        fontSize: '2rem',

      },
      medium: {
        fontSize: '1.5rem',
      },
      small: {
        fontSize: '1rem',

      },
      smallest: {
        fontSize: '0.85rem',
      }
    }
  }
})