import { recipe } from '@vanilla-extract/recipes';
import { themeColor, vars } from '../../../styles/global.css';

export const button = recipe({
  base: {
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: themeColor.color.contentBackground,
        color: 'white',
        ':hover': {
          backgroundColor: '#0056b3'
        }
      },
      secondary: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.primary}`,
        color: vars.color.primary,
        ':hover': {
          backgroundColor: vars.color.primary,
          color: 'white'
        }
      },
      warning: {
        backgroundColor: themeColor.color.buttonBackground,
        color: 'white',
      }
    },
    size: {
      small: { fontSize: '14px', width: '76px' },
      medium: { fontSize: '16px', width: '100px' },
      large: { fontSize: '18px', width: '140px' }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
});