import { style } from "@vanilla-extract/css";

export const sideBar = style({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #fff",
  borderRadius: "10px",
  height: "100%",
  marginLeft: "2em",
  padding: "1em",
  width: "12.5vw",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none"
    }
  }
});
