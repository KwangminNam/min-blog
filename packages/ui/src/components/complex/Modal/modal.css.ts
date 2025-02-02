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
  width: '100%',
  maxWidth: '720px',
  height: '600px',
});

export const modalHeader = style({
  display: 'flex',
  padding: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `1px solid ${themeColor.color.borderColor}`,
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
  alignItems: 'center',
  borderTop: `1px solid ${themeColor.color.borderColor}`,
});