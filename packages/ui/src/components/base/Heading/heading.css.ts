import { style, styleVariants } from '@vanilla-extract/css';

const baseHeading = style({
  margin: 0,
});

export const headingVariants = styleVariants({
  h1: [baseHeading, {
    fontSize: '2.4rem',
    fontWeight: 700,
    '@media': {
      'screen and (max-width: 768px)': {
        fontSize: '2rem'
      }
    }
  }],
  h2: [baseHeading, {
    fontSize: '1.7rem',
    fontWeight: 600,
    '@media': {
      'screen and (max-width: 768px)': {
        fontSize: '1.5rem'
      }
    }
  }],
  h3: [baseHeading, {
    fontSize: '1.25rem',
    fontWeight: 600,
    '@media': {
      'screen and (max-width: 768px)': {
        fontSize: '1.125rem'
      }
    }
  }],
  h4: [baseHeading, {
    fontSize: '1.15rem',
    fontWeight: 500,
  }],
  h5: [baseHeading, {
    fontSize: '1.05rem',
    fontWeight: 500,
  }],
  h6: [baseHeading, {
    fontSize: '1rem',
    fontWeight: 500,
  }],
});