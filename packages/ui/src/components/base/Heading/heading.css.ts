import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';
const baseHeading = style({
  margin: 0,
});

export const headingVariants = styleVariants({
  h1: [baseHeading, {
    fontSize: vars.size.rem[2],
    fontWeight: vars.font.weight['bold'],
    '@media': {
      'screen and (max-width: 768px)': {
        fontSize: vars.size.rem[1.85]
      }
    }
  }],
  h2: [baseHeading, {
    fontSize: vars.size.rem[1.75],
    fontWeight: vars.font.weight['medium'],
    '@media': {
      'screen and (max-width: 768px)': {
        fontSize: vars.size.rem[1.65]
      }
    }
  }],
  h3: [baseHeading, {
    fontSize: vars.size.rem[1.25],
    fontWeight: vars.font.weight['medium'],
    '@media': {
      'screen and (max-width: 768px)': {
        fontSize: vars.size.rem[1]
      }
    }
  }],
  h4: [baseHeading, {
    fontSize: vars.size.rem[1],
    fontWeight: vars.font.weight['medium'],
  }],
  h5: [baseHeading, {
    fontSize: vars.size.rem[0.85],
    fontWeight: vars.font.weight['medium'],
  }],
  h6: [baseHeading, {
    fontSize: vars.size.rem[1],
    fontWeight: vars.font.weight['medium'],
  }],
});