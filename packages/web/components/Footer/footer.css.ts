import { style } from "@vanilla-extract/css";

export const footer = style({
  width: "100%",
  height: "100px",
  padding: "20px 0",
  paddingTop: "40px",
  gap: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const footerContainer = style({
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
