import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const kbd = style({
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: '4px',
  padding: '0px 3px',
  fontSize: '13px',
  color: '#666',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #666',
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
  gap: '6px',
  maxWidth: '240px',
  padding: '4px 10px',
  backgroundColor: themeColor.color.searchInputColor,
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  width: '240px',
  
  '@media': {
    'screen and (max-width: 1024px)': {
      maxWidth: '200px',
      width: '200px',
      padding: '4px 8px',
    },
    'screen and (max-width: 768px)': {
      maxWidth: '160px',
      width: '160px',
      padding: '3px 6px',
      gap: '4px',
    }
  },
  
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },

});

export const searchIcon = style({
  color: '#666',
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
  padding: '2px 4px',
  backgroundColor: 'rgba(0, 0, 0, 0.07)',
  borderRadius: '4px',
  fontSize: '12px',
  color: '#666',
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '10px',
      padding: '1px 3px',
    }
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#999',
    }
  }
});