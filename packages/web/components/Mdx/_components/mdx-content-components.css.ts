import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";

export const badge = style({
  backgroundColor: '#24292e',
  padding: '5px 10px',
  border: '1px solid #ccc',
  color: '#fff',
  fontSize: '12px',
  width: 'fit-content',
  borderRadius: '5px',
});

export const link = style({
  color: themeColor.color.tagColor,
  textDecoration: 'underline',
});

export const h1Style = style({
  fontSize: '24px',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h2Style = style({
  fontSize: '20px',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h3Style = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h4Style = style({
  fontSize: '14px',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h5Style = style({
  fontSize: '12px',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h6Style = style({
  fontSize: '10px',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const hr = style({
  height: '1px',
  border: 'none',
  margin: '25px 0',
  backgroundColor: themeColor.color.mainFontColor,
});

export const imageDescription = style({
  fontSize: '12px',
  color: themeColor.color.secondaryFontColor,
});

export const ulStyle = style({
  listStyleType: 'disc',
  paddingLeft: '10px',
  color: themeColor.color.mainFontColor,
});

export const olStyle = style({
  listStyleType: 'decimal',
  color: themeColor.color.mainFontColor,
});

export const listStyle = style({
  lineHeight: '1.9',
});


export const orderedTitle = {
  p: style({
    lineHeight: '1.9',
    fontSize: '16px',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h1: style({
    lineHeight: '1.9',
    fontSize: '26px',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h2: style({
    lineHeight: '1.9',
    fontSize: '22px',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h3: style({
    lineHeight: '1.9',
    fontSize: '20px',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h4: style({
    lineHeight: '1.9',
    fontSize: '18px',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h5: style({
    lineHeight: '1.9',
    fontSize: '16px',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h6: style({
    lineHeight: '1.9',
    fontSize: '14px',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
};

export const code = style({
  backgroundColor: 'red',
});

export const strong = style({
  color: themeColor.color.mainFontColor,
  fontWeight: '900',
});

export const paragraph = style({
  color: themeColor.color.mainFontColor,
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
});

export const callout = style({
  backgroundColor: 'red',
  padding: '10px',
  borderRadius: '5px',
});
