import { style } from "@vanilla-extract/css";

import { globalStyle } from "@vanilla-extract/css";

export const postItem = style({
  padding: "12px",
  borderBottom: "2px solid #e0e0e0",
  width: "100%",
  
});

globalStyle(`${postItem} a`, {
  display: "block",
  width: "100%",
});