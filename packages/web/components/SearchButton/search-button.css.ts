import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const kbd = style({
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: '4px',
  padding: '0px 4px',
  fontSize: '13px',
  color: '#666',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #666',
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
  color: '#666',
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
  color: '#666',
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#999',
    }
  }
});