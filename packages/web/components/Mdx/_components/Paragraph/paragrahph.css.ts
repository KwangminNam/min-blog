import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const paragraph = style({
  color: themeColor.color.mainFontColor,
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
});
