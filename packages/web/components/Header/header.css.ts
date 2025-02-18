import { vars } from "@kwangmins-blog/ui";
import { style, keyframes } from "@vanilla-extract/css";

const slideDown = keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(0)' }
});

const slideUp = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(-100%)' }
});

export const header = style({
  position: "fixed",
  top: 0,
  height: "4.5rem",
  width: "100%",
  zIndex: vars.zIndex.z10,
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid #e0e0e0",
  transition: 'transform 0.3s ease-in-out',
});

export const headerVisible = style({
  animation: `${slideDown} 0.3s ease-in-out forwards`,
});

export const headerHidden = style({
  animation: `${slideUp} 0.3s ease-in-out forwards`,
});

export const headerContainer = style({
  maxWidth: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  margin: "0 auto",
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 14px'
    }
  }
});
