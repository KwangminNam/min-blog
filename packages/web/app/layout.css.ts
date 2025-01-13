import { style } from '@vanilla-extract/css';

export const containerStyled = style({
  display: 'block',
  containerType: 'inline-size',
  maxWidth: 1050,
  margin: '0 auto',
  padding: 12,
  minHeight: '100dvh',
});

export const mainStyled = style({
  width: '100%',
});
