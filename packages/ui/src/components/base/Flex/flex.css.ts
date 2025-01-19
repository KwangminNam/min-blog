import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { CSSProperties } from 'react';

export type FlexVariants = RecipeVariants<typeof flexRecipe>;

export type FlexProps = FlexVariants & {
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
      small: { gap: '0.5rem' },
      medium: { gap: '1rem' },
      large: { gap: '1.5rem' },
    },
  },
});
