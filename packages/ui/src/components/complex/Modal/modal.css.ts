import { themeColor } from '@monorepo/ui';
import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modalWrapper = style({
  backgroundColor: themeColor.color.mainBackground,
  padding: '2rem',
  borderRadius: '12px',
  width: '90%',
  maxWidth: '500px',
  height: '500px',
  overflow: 'auto',
});

export const modalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${themeColor.color.borderColor}`,
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: `1px solid ${themeColor.color.borderColor}`,
});