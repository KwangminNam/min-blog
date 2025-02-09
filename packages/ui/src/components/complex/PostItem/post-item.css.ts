import { themeColor } from "../../../styles/global.css";
import { keyframes, style } from "@vanilla-extract/css";

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
  padding: "20px 0",
  width: "100%",
  height: "140px",
  willChange: 'transform, opacity',
  transition: 'background-color 0.3s ease',
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      opacity: 0,
      animation: `${fadeInUp} 0.5s ease forwards`
    }
  },
  selectors: {
    '&:hover': {
      borderRadius: "7px",
      backgroundColor: themeColor.color.listHoverColor,
    }
  }
});
