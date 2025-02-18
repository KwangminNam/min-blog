import { themeColor, vars } from "@kwangmins-blog/ui";
import { style } from "@vanilla-extract/css";



export const tocContainer = style({
  position: 'sticky',
  width: vars.size.box[250],
  top: vars.size.rem[6],
  height: 'fit-content',
  overflowY: 'auto',
  padding: vars.size.px[16],
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: vars.size.radius[8],
  '@media': {
    '(max-width: 1024px)': {
      display: 'none'
    }
  }
});

export const tocTitle = style({
  fontSize: vars.size.rem[1.25],
  fontWeight: '600',
  marginBottom: vars.size.px[20],
  padding: vars.size.px[10],
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
  color: vars.color.gray2,
  textDecoration: 'none',
  fontSize: vars.size.rem[0.85],
  transition: 'all 0.2s ease',
  ':hover': {
    color: vars.color.white
  }
});

export const activeClass = style({
  color: themeColor.color.mainFontColor,
  fontWeight: vars.font.weight['medium'],
  transform: 'translateX(4px)'
});