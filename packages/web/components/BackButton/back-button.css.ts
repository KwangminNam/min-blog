import { style } from "@vanilla-extract/css";

export const backButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  borderRadius: '8px',
  paddingLeft: '0',
  width: 'fit-content',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    // backgroundColor: 'var(--back-button-hover-bg, #e2e8f0)',
    transform: 'translateX(-4px)'
  },

  // selectors: {
  //   '[data-theme="dark"] &': {
  //     backgroundColor: '#1e293b',
  //     color: '#e2e8f0',
  //   },
  //   '[data-theme="dark"] &:hover': {
  //     backgroundColor: '#334155'
  //   }
  // }
});