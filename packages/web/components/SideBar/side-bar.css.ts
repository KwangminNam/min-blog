import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const sideBar = style({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: ".5em",
  border: `1px solid ${themeColor.color.borderColor}`,
  borderRadius: "10px",
  height: "100%",
  padding: "1em",
  width: "30%",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none"
    }
  }
});
