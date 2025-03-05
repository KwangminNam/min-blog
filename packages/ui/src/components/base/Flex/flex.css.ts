import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/global.css';


export const flex = style({
  display: 'flex',
});

export const flexRecipe = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    flex: {
      1: { flex: 1 },
    },
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      rowReverse: { flexDirection: 'row-reverse' },
      columnReverse: { flexDirection: 'column-reverse' },
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },
    wrap: {
      wrap: { flexWrap: 'wrap' },
      nowrap: { flexWrap: 'nowrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
    },
    gap: {
      smallest: { 
        gap: vars.size.px[4],
        '@media': {
          'screen and (max-width: 768px)': {
            gap: vars.size.px[2]
          }
        }
      },
      small: { 
        gap: vars.size.px[8],
        '@media': {
          'screen and (max-width: 768px)': {
            gap: vars.size.px[4]
          }
        }
      },
      medium: { 
        gap: vars.size.px[16],
        '@media': {
          'screen and (max-width: 768px)': {
            gap: vars.size.px[8]
          }
        }
      },
      large: { 
        gap: vars.size.px[24],
        '@media': {
          'screen and (max-width: 768px)': {
            gap: vars.size.px[12]
          }
        }
      },
      xlarge: { 
        gap: vars.size.px[32],
        '@media': {
          'screen and (max-width: 768px)': {
            gap: vars.size.px[16]
          }
        }
      },
    },
  },
});

