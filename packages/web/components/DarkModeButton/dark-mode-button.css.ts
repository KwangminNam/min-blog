import { style } from "@vanilla-extract/css";

export const switchButton = style({
  position: 'relative',
  width: '56px',
  height: '28px',
  borderRadius: '14px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  backgroundColor: 'var(--switch-bg, #e2e8f0)',
  ':hover': {
    opacity: 0.85
  },
  selectors: {
    '&[data-theme="dark"]': {
      backgroundColor: '#334155'
    }
  }
});

export const slider = style({
  position: 'absolute',
  top: '4px',
  left: '4px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: 'white',
  transition: 'transform 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '[data-theme="dark"] &': {
      transform: 'translateX(28px)'
    }
  }
});

export const icon = style({
  color: '#fbbf24',
  selectors: {
    '[data-theme="dark"] &': {
      color: '#94a3b8'
    }
  }
});