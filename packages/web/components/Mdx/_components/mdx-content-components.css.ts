import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const hr = style({
  height: '1px',
  border: 'none',
  backgroundColor: 'gray',
});

export const ulStyle = style({
  listStyleType: 'disc',
});

export const olStyle = style({
  listStyleType: 'decimal',
});


export const code = style({
  backgroundColor: 'red',
});

export const paragraph = style({
  color: themeColor.color.mainFontColor,
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
});