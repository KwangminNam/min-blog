import { style } from '@vanilla-extract/css';

export const containerStyled = style({
  display: 'block',
  containerType: 'inline-size',
  width: '1050px',
  margin: '0 auto',
  padding: '110px 16px 12px',
  height: '100%',
  '@media': {
    'screen and (max-width: 1024px)': {
      width: '768px',
    },
    'screen and (max-width: 768px)': {
      width: '360px',
      padding: '110px 0 12px',
    }
  }
});

export const postListContainerStyled = style({
  display: 'block',
  containerType: 'inline-size',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '110px 16px 12px',
  height: '100%',
  '@media': {
    'screen and (max-width: 1024px)': {
      maxWidth: '768px',
    },
    'screen and (max-width: 768px)': {
      maxWidth: '360px',
    }
  }
});

export const mainStyled = style({
  width: '100%',
});
