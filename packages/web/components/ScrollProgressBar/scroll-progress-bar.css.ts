import { vars } from "@kwangmins-blog/ui";
import { style, createVar, keyframes } from "@vanilla-extract/css";

export const progressWidthVar = createVar();

export const slideDown = keyframes({
  '0%': { top: '0' },
  '100%': { top: '4.4rem' }
});

export const slideUp = keyframes({
  '0%': { top: '4.4rem' },
  '100%': { top: '0' }
});

export const scrollProgressBarVisible = style({
  animation: `${slideDown} 0.3s ease-in-out forwards`,
});

export const scrollProgressBarHidden = style({
  animation: `${slideUp} 0.3s ease-in-out forwards`,
});

export const scrollProgressBar = style({
    position: "fixed",
    top: "4.4rem",
    left: 0,
    width: "100%",
    height: "10px",
    backgroundColor: "transparent",
    zIndex: vars.zIndex.zMax,
});

export const scrollProgressBarBar = style({
    width: progressWidthVar,
    height: "100%",
    background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
    transition: "width 0.1s ease-out",
    borderRadius: '2px'
});