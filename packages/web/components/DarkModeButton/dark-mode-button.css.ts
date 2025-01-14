import { keyframes, style } from "@vanilla-extract/css";

const rotateAnimation = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
});

export const rotate = style({
  animation: `${rotateAnimation} 0.5s ease-in-out`
});