import { style } from '@vanilla-extract/css';

export const counter = style({
  display: 'inline-block',
  transition: 'transform 0.2s ease',
  selectors: {
    '&:changed': {
      transform: 'scale(1.1)'
    }
  }
});