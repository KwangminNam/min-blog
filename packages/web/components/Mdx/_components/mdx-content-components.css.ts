import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const hr = style({
  height: '1px',
  border: 'none',
  backgroundColor: 'gray',
});

export const ulStyle = style({
  listStyleType: 'disc',
  color: themeColor.color.mainFontColor,
});

export const olStyle = style({
  listStyleType: 'decimal',
  color: themeColor.color.mainFontColor,
});


export const code = style({
  backgroundColor: 'red',
});

export const strong = style({
  color: themeColor.color.mainFontColor,
  fontWeight: '900',
});

export const paragraph = style({
  color: themeColor.color.mainFontColor,
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
});