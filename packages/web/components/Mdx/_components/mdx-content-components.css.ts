import { themeColor, vars } from "@kwangmins-blog/ui";
import { style } from "@vanilla-extract/css";

export const badge = style({
  backgroundColor: '#24292e',
  padding: '0.3125rem 0.625rem',
  border: '0.0625rem solid #ccc',
  color: '#fff',
  fontSize: '0.75rem',
  width: 'fit-content',
  borderRadius: '0.3125rem',
});

export const link = style({
  color: themeColor.color.tagColor,
  textDecoration: 'underline',
});

export const h1Style = style({
  fontSize: 'clamp(1.25rem, 5vw, 1.5rem)',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h2Style = style({
  fontSize: 'clamp(1.125rem, 4vw, 1.25rem)',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h3Style = style({
  fontSize: 'clamp(1rem, 3.5vw, 1.125rem)',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h4Style = style({
  fontSize: 'clamp(0.875rem, 3vw, 1rem)',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h5Style = style({
  fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const h6Style = style({
  fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
  fontWeight: 'bold',
  color: themeColor.color.mainFontColor,
});

export const hr = style({
  height: '0.0625rem',
  border: 'none',
  margin: '1.5625rem 0',
  backgroundColor: themeColor.color.mainFontColor,
});

export const imageDescription = style({
  fontSize: '0.75rem !important',
  color: `${themeColor.color.secondaryFontColor} !important`,
});

export const ulStyle = style({
  listStyleType: 'disc',
  paddingLeft: '0.625rem',
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
    fontSize: 'clamp(0.875rem, 3vw, 1rem)',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h1: style({
    lineHeight: '1.9',
    fontSize: 'clamp(1.25rem, 5vw, 1.625rem)',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h2: style({
    lineHeight: '1.9',
    fontSize: 'clamp(1.125rem, 4.5vw, 1.375rem)',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h3: style({
    lineHeight: '1.9',
    fontSize: 'clamp(1rem, 4vw, 1.25rem)',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h4: style({
    lineHeight: '1.9',
    fontSize: 'clamp(0.875rem, 3.5vw, 1.125rem)',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h5: style({
    lineHeight: '1.9',
    fontSize: 'clamp(0.75rem, 3vw, 1rem)',
    fontWeight: 'bold',
    color: themeColor.color.mainFontColor,
  }),
  h6: style({
    lineHeight: '1.9',
    fontSize: 'clamp(0.625rem, 2.5vw, 0.875rem)',
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
  fontSize: 'clamp(0.875rem, 3vw, 1rem)',
  lineHeight: '1.5',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
});

export const callout = style({
  backgroundColor: themeColor.color.mainBackground,
  padding: '0.625rem',
  border: `1px solid ${themeColor.color.borderColor}`,
  borderRadius: '0.3125rem',
});
