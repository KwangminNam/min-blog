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
  borderBottom: `1px solid ${themeColor.color.borderColor}`,
  width: "100%",
  opacity: 0,
  animation: `${fadeInUp} 0.5s ease forwards`,
  transition: 'background-color 0.3s ease',
});