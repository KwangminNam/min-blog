import { style } from "@vanilla-extract/css";

export const header = style({
  position: "sticky",
  top: 0,
  height: "6.5rem",
  width: "100%",
  zIndex: 1000,
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid #e0e0e0",
  justifyContent: "space-between",
  alignItems: "center",
});

export const headerContainer = style({
  maxWidth: 1050,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  margin: "0 auto",
});
