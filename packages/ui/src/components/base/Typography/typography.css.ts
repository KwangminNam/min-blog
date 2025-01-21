
import { recipe } from "@vanilla-extract/recipes";

export const typography = recipe({
  base: {
    fontFamily: 'Inter, sans-serif',
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