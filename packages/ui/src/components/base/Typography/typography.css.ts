
import { recipe } from "@vanilla-extract/recipes";

export const typography = recipe({
  base: {
    fontFamily: 'Inter, sans-serif',  
  },
  variants: {
    variant: {
      large: {
        fontSize: '2rem',
        fontWeight: 'bold'
      },
      medium: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
      },
      small: {
        fontSize: '1rem',
        fontWeight: 'normal'
      }
    }
  }
})