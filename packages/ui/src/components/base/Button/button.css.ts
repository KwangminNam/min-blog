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
    selectors: {
      '&.is-active': {
        backgroundColor: themeColor.color.buttonBackgroundHover,
      }
    }
  },
  variants: {
    variant: {
      inputStyle: {
        backgroundColor: '#181818',
        border: '1px solid #666',
        color: 'white',
        borderRadius: '8px',
        padding: '6px 12px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        selectors: {
          '&.is-active': {
            backgroundColor: themeColor.color.buttonBackgroundHover,
          }
        }
      },
      none: {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
      },
      primary: {
        backgroundColor: themeColor.color.buttonBackground,
        border: `1px solid ${vars.color.white}`,
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
      smallest: { fontSize: '12px', width: '32px', padding: '8px 10px' },
      small: { fontSize: '14px', width: '76px' },
      medium: { fontSize: '16px', width: '100px' },
      large: { fontSize: '18px', width: '140px' },
      xlarge: { fontSize: '18px', width: '240px' }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
});