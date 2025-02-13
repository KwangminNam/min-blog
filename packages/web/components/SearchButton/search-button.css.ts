import { themeColor, vars } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const kbd = style({
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: vars.size.radius[4],
  padding: vars.size.px[3],
  fontSize: vars.font.size.px[12],
  color: vars.color.gray2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.gray2}`,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '11px',
      padding: '0px 2px',
    }
  }
});

export const searchButton = style({
  display: 'flex',
  border: "1px solid red",
  alignItems: 'center',
  gap: vars.size.px[6],
  maxWidth: vars.size.box[160],
  padding: `${vars.size.px[12]} ${vars.size.px[16]}`,
  backgroundColor: themeColor.color.searchInputColor,
  borderRadius: vars.size.radius[8],
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  width: vars.size.box[160],
  
  '@media': {
    'screen and (max-width: 1024px)': {
      maxWidth: vars.size.box[120],
      width: vars.size.box[120],
      padding: `${vars.size.px[8]} ${vars.size.px[12]}`,
    },
    'screen and (max-width: 768px)': {
      maxWidth: vars.size.box[80],
      width: vars.size.box[80],
      padding: `${vars.size.px[6]} ${vars.size.px[8]}`,
      gap: vars.size.px[4],
    }
  },
  
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },

});

export const searchIcon = style({
  color: vars.color.gray2,
  '@media': {
    'screen and (max-width: 768px)': {
      transform: 'scale(0.85)',
    }
  },
  selectors: {
    '[data-theme="dark"] &': {
      color: '#999',
    }
  }
});

export const shortcut = style({
  marginLeft: 'auto',
  padding: `${vars.size.px[2]} ${vars.size.px[4]}`,
  backgroundColor: 'rgba(0, 0, 0, 0.07)',
  borderRadius: vars.size.radius[4],
  fontSize: vars.font.size.px[12],
  color: vars.color.gray2,
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.font.size.px[10],
      padding: `${vars.size.px[1]} ${vars.size.px[3]}`,
    }
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#999',
    }
  }
});