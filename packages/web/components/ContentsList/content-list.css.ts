import { themeColor } from "@monorepo/ui";
import { style } from "@vanilla-extract/css";



export const tocContainer = style({
  position: 'sticky',
  width: '30%',
  top: '6rem',
  height: '300px',
  overflowY: 'auto',
  padding: '1rem',
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: '8px',
  border: `1px solid ${themeColor.color.secondaryFontColor}`,
  '@media': {
    '(max-width: 1024px)': {
      display: 'none'
    }
  }
});

export const tocTitle = style({
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: '1rem',
  padding: '0.5rem 0',
  borderBottom: `1px solid ${themeColor.color.secondaryFontColor}`
});

export const tocList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0
});

export const tocItem = style({
  margin: '0.5rem 0',
  transition: 'all 0.2s ease'
});

export const tocLink = style({
  display: 'block',
  padding: '0.25rem 0',
  color: '#666',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'all 0.2s ease',
  ':hover': {
    color: '#000'
  }
});

export const activeClass = style({
  color: themeColor.color.mainFontColor,
  fontWeight: '600',
  transform: 'translateX(4px)'
});