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
    transform: 'translateX(-4px)'
  },

});