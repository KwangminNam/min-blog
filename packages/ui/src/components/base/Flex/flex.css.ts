import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { CSSProperties } from 'react';

export type TFlexVariants = RecipeVariants<typeof flexRecipe>;

export type TFlexProps = TFlexVariants & {
  css?: CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

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
        gap: '4px',
        '@media': {
          'screen and (max-width: 768px)': {
            gap: '2px'
          }
        }
      },
      small: { 
        gap: '8px',
        '@media': {
          'screen and (max-width: 768px)': {
            gap: '4px'
          }
        }
      },
      medium: { 
        gap: '16px',
        '@media': {
          'screen and (max-width: 768px)': {
            gap: '8px'
          }
        }
      },
      large: { 
        gap: '24px',
        '@media': {
          'screen and (max-width: 768px)': {
            gap: '12px'
          }
        }
      },
      xlarge: { 
        gap: '32px',
        '@media': {
          'screen and (max-width: 768px)': {
            gap: '16px'
          }
        }
      },
    },
  },
});

