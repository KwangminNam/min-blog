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
  padding: "12px 0",
  paddingTop: "20px",
  borderBottom: "1px solid #e0e0e0",
  width: "100%",
  opacity: 0,
  animation: `${fadeInUp} 0.5s ease forwards`,
  transition: 'background-color 0.3s ease',
  selectors: {
    "&:last-child": {
      borderBottom: "none"
    },
  }

});