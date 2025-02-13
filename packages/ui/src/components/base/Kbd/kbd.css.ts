import { themeColor, vars } from "../../../styles/global.css";
import { style } from "@vanilla-extract/css";

export const kbd = style({
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: vars.size.radius[4],
  padding: vars.size.px[4],
  fontSize: vars.font.size.px['13'],
  color: vars.color.gray2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.gray2}`,
});

export const searchButton = style({
  display: 'flex',
  border:"1px solid red",
  alignItems: 'center',
  gap: '8px',
  maxWidth: '240px',
  padding: '6px 12px',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  width: '240px',
  
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },

  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    '[data-theme="dark"] &:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    }
  }
});

export const searchIcon = style({
  color: vars.color.gray2,
  selectors: {
    '[data-theme="dark"] &': {
      color: '#999',
    }
  }
});

export const shortcut = style({
  marginLeft: 'auto',
  padding: '2px 6px',
  backgroundColor: 'rgba(0, 0, 0, 0.07)',
  borderRadius: '4px',
  fontSize: '12px',
  color: vars.color.gray2,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#999',
    }
  }
});