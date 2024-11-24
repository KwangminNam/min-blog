import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  position: "sticky",
  top: 0,
  height: "6.5rem",
  width: "100%",
  backdropFilter: "blur(8px)",
  justifyContent: "space-between",
  alignItems: "center",
});