
import { recipe } from "@vanilla-extract/recipes";

export const typography = recipe({
  base: {
    fontFamily: 'Inter, sans-serif',
  },
  variants: {
    variant: {
      large: {
        fontSize: '2rem',

      },
      medium: {
        fontSize: '1.5rem',
      },
      small: {
        fontSize: '1rem',

      }
    }
  }
})