import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/global.css';

export const button = recipe({
  base: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
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
        backgroundColor: vars.color.error,
        color: 'white',
      }
    },
    size: {
      small: { padding: '8px 16px', fontSize: '14px', width: '52px' },
      medium: { padding: '10px 20px', fontSize: '16px', width: '64px' },
      large: { padding: '12px 24px', fontSize: '18px', width: '72px' }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
});