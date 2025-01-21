import { style } from '@vanilla-extract/css';

export const containerStyled = style({
  display: 'block',
  containerType: 'inline-size',
  maxWidth: 1000,
  margin: '0 auto',
  padding: '110px 12px 12px',
  height: '100%',
});

export const mainStyled = style({
  width: '100%',
});
