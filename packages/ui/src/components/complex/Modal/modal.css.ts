import { themeColor } from '@monorepo/ui';
import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: "blur(10px)",
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modalWrapper = style({
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: '12px',
  width: '90%',
  maxWidth: '520px',
  margin: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '95%',
      margin: '8px',
      maxHeight: '90vh',
      overflow: 'auto'
    }
  }
});

export const modalHeader = style({
  display: 'flex',
  padding: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `1px solid ${themeColor.color.borderColor}`,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '12px'
    }
  }
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '16px',
  alignItems: 'center',
  borderTop: `1px solid ${themeColor.color.borderColor}`,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '12px'
    }
  }
});