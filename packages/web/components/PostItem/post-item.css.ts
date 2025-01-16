import { keyframes, style } from "@vanilla-extract/css";

import { globalStyle } from "@vanilla-extract/css";

const fadeInUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(20px)'
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

export const postItem = style({
  padding: "12px 0",
  borderBottom: "2px solid #e0e0e0",
  width: "100%",
  opacity: 0,
  animation: `${fadeInUp} 0.5s ease forwards`,
  transition: 'background-color 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 128, 0.5)',
    }
  }

});

globalStyle(`${postItem} a`, {
  display: "block",
  width: "100%",
});