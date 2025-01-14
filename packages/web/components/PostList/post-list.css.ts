import { globalStyle, style } from "@vanilla-extract/css";

export const postList = style({
  // padding: "12px",
});

export const postItem = style({
  padding: "12px",
  borderBottom: "2px solid #e0e0e0",
  width: "100%",
});

globalStyle(`${postItem} a`, {
  color: "red",
  display: "block",
  width: "100%",
});
