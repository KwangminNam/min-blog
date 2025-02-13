import { themeColor, vars } from "../../../styles/global.css";
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
  padding: `${vars.size.px[20]} 0`,
  width: "100%",
  height: vars.size.box[140],
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
      borderRadius: vars.size.radius[8],
      backgroundColor: themeColor.color.listHoverColor,
    }
  }
});
