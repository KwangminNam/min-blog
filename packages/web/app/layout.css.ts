import { style } from '@vanilla-extract/css';

export const containerStyled = style({
  display: 'block',
  containerType: 'inline-size',
  width: '60rem',
  margin: '0 auto',
  padding: '6.875rem 1rem 0.75rem',
  height: '100%',
  '@media': {
    'screen and (max-width: 48rem)': {
      padding: '5rem 0.75rem 0.75rem',
    }
  }
});

export const postListContainerStyled = style({
  display: 'block',
  containerType: 'inline-size',
  width: '100%',
  maxWidth: '75rem',
  margin: '0 auto',
  padding: '6.875rem 1rem 0.75rem',
  height: '100%',
  '@media': {
    'screen and (max-width: 48rem)': {
      padding: '5rem 0.75rem 0.75rem',
    }
  }
});

export const mainStyled = style({
  width: '100%',
});
