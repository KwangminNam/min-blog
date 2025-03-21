import { createGlobalTheme, style, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';
import * as layers from "./layers.css";
import STYLE from './constant';

const { size, zIndex, weight } = STYLE;

export const vars = createGlobalTheme(":root", {
  color: {
    primaryDarkBackground: "#1a1a2d",
    primaryLightBackground: "#f7f9fa",
    buttonDarkBackground: "#141d26",
    buttonLightBackground: "#0056b3",
    buttonBackgroundHover: "#0056b3",
    secondaryBackground: "#55679C",
    secondaryFontColor: "#94a3b8",
    white: "#fff",
    black: "#000",
    accent: "#080",
    primary: "#0f1a33",
    secondary: "#6c757d",
    success: "#28a745",
    gray: "#ccc",
    gray2: '#666',
    error: "#dc3545",
    dimmed: 'rgba(0, 0, 0, 0.8)'
  },
  zIndex: {
    ...zIndex
  },
  size: {
    ...size
  },
  spacing: {
    ...size
  },
  font: {
    size: {
      ...size
    },
    weight: {
      ...weight
    }
  },
});


export const themeColor = createThemeContract({
  color: {
    mainBackground: null,
    mainFontColor: null,
    secondaryFontColor: null,
    thirdFontColor: null,
    buttonTextColor: null,
    searchInputColor: null,
    navFontColor: null,
    listHoverColor: null,
    navActiveFontColor: null,
    tagColor: null,
    buttonBackground: null,
    buttonBackgroundHover: null,
    borderColor: null,
  },
});


export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: vars.color.primaryLightBackground,
    navFontColor: vars.color.black,
    navActiveFontColor: vars.color.secondaryBackground,
    searchInputColor: '#f7f9fa',
    buttonBackground: '#1a2847',
    secondaryFontColor: '#333',
    tagColor: vars.color.secondaryBackground,
    buttonBackgroundHover: '#0056b3',
    buttonTextColor: vars.color.white,
    mainFontColor: '#2c2c2c',
    borderColor: '#0f1a33',
    thirdFontColor: vars.color.black,
    listHoverColor: "#eee",
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: vars.color.primaryDarkBackground,
    searchInputColor: '#1a1a2d',
    navFontColor: vars.color.secondaryBackground,
    navActiveFontColor: vars.color.white,
    buttonBackground: vars.color.buttonDarkBackground,
    tagColor: vars.color.secondaryBackground,
    buttonTextColor: vars.color.white,
    buttonBackgroundHover: '#0056b3',
    mainFontColor: '#fff',
    secondaryFontColor: vars.color.secondaryFontColor,
    borderColor: '#f7f9fa',
    thirdFontColor: vars.color.gray,
    listHoverColor: "#2e2e45",
  },
});

globalStyle(":root", {
  vars: {
    '--theme-main-background': themeColor.color.mainBackground,
    '--theme-main-font-color': themeColor.color.mainFontColor,
    '--theme-secondary-font-color': themeColor.color.secondaryFontColor,
    '--theme-border-color': themeColor.color.borderColor,
    '--theme-list-hover-color': themeColor.color.listHoverColor,
    '--theme-nav-active-font-color': themeColor.color.navActiveFontColor,
    '--theme-button-background-hover': themeColor.color.buttonBackgroundHover,
    '--theme-tag-color': themeColor.color.tagColor,
    '--theme-button-text-color': themeColor.color.buttonTextColor,
    '--theme-button-background': themeColor.color.buttonBackground,
    '--theme-color-black': vars.color.black,

    '--theme-color-error': vars.color.error,
  }
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: "blur(10px)",
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: vars.zIndex.zMax,
});

globalStyle("tr", {
  borderBottom: `1px solid ${themeColor.color.borderColor}`,
});

globalStyle("td, th", {
  padding: '6px 0',
  color: themeColor.color.mainFontColor
});

globalStyle("pre", {
  margin: 0,
  border: '1px solid #ccc',
  padding: '15px'
});

globalStyle(".code-block-wrapper", {
  position: "relative",
});


globalStyle(".is-post-link", {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

globalStyle(".post-list-image", {
  width: "100px",
  height: "75px",
  objectFit: "cover",
  borderRadius: "8px",
  '@media': {
    'screen and (max-width: 768px)': {
      width: "70px",
      height: "52px"
    }
  }
});

globalStyle(".copy-button", {
  position: "absolute",
  top: "8px",
  border: '1px solid #ccc',
  right: "8px",
  padding: "4px 8px",
  backgroundColor: themeColor.color.buttonBackground,
  color: themeColor.color.buttonTextColor,
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
  transition: "background-color 0.2s",
});

globalStyle(".copy-button:hover", {
  backgroundColor: themeColor.color.buttonBackgroundHover,
});



globalStyle("html, body", {
  backgroundColor: themeColor.color.mainBackground,
  color: "#fff",
  transition: 'background-color .4s ease-in-out, color 0.3s ease-in-out'
});

globalStyle(".ellipsis", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "700px",
  display: 'block',
  '@media': {
    'screen and (max-width: 1024px)': {
      maxWidth: '390px'
    },
    'screen and (max-width: 768px)': {
      maxWidth: '240px'
    }
  }
});

globalStyle(".ellipsis.short", {
  maxWidth: "350px",
  '@media': {
    'screen and (max-width: 1024px)': {
      maxWidth: '250px'
    },
    'screen and (max-width: 768px)': {
      maxWidth: '150px'
    }
  }
});

globalStyle(".is-hover:hover", {
  color: "#FFB088"
});


globalStyle(".article", {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

globalStyle(".button-link", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "1.5rem",
  backgroundColor: themeColor.color.buttonBackground,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: ".5rem"
    }
  }
});

globalStyle(".button-link:hover", {
  backgroundColor: themeColor.color.buttonBackgroundHover,
});


globalStyle(
  "*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))",
  {
    "@layer": {
      [layers.reset]: {
        all: "unset",
        display: "revert",
      },
    },
  },
);

globalStyle("::-webkit-scrollbar", {
  "@layer": {
    [layers.reset]: {
      width: "8px",
      height: "8px",
      background: "transparent",
    },
  },
});

globalStyle("::-webkit-scrollbar-track", {
  "@layer": {
    [layers.reset]: {
      background: "transparent",
      border: "none",
    },
  },
});

globalStyle("::-webkit-scrollbar-thumb", {
  "@layer": {
    [layers.reset]: {
      background: '#555',
      borderRadius: "4px",
      width: "8px",
      border: "none",
    },
  },
});

globalStyle("::-webkit-scrollbar-corner", {
  "@layer": {
    [layers.reset]: {
      background: "transparent",
    },
  },
});

/**
 * Preferred box-sizing value
 */
globalStyle("*, *::before, *::after", {
  "@layer": {
    [layers.reset]: {
      boxSizing: "border-box",
    },
  },
});

/**
 * Fix mobile Safari increase font-size on landscape mode
 */
globalStyle("html", {
  "@layer": {
    [layers.reset]: {
      MozTextSizeAdjust: "none",
      WebkitTextSizeAdjust: "none",
      textSizeAdjust: "none",
    },
  },
});

/**
 * Reapply the pointer cursor for anchor tags
 */
globalStyle("a, button", {
  "@layer": {
    [layers.reset]: {
      color: themeColor.color.mainFontColor,
      cursor: "pointer",
    },
  },
});

globalStyle("h1, h2, h3, h4, h5, h6, span", {
  "@layer": {
    [layers.reset]: {
      color: themeColor.color.mainFontColor,
    },
  },
});


/**
 * Remove list styles (bullets/numbers)
 */
globalStyle("ol, ul, menu, summary", {
  "@layer": {
    [layers.reset]: {
      listStyle: "none",
    },
  },
});

/**
 * For images to not be able to exceed their container
 */
globalStyle("img", {
  "@layer": {
    [layers.reset]: {
      maxInlineSize: "100%",
      maxBlockSize: "100%",
    },
  },
});

/**
 * Removes spacing between cells in tables
 */
globalStyle("table", {
  "@layer": {
    [layers.reset]: {
      borderCollapse: "collapse",
    },
  },
});

/**
 * Safari - solving issue when using user-select:none on the <body> text input
 * doesn't working
 */
globalStyle("input, textarea", {
  "@layer": {
    [layers.reset]: {
      WebkitUserSelect: "auto",
    },
  },
});

/**
 * Revert the 'white-space' property for textarea elements on Safari
 */
globalStyle("textarea", {
  "@layer": {
    [layers.reset]: {
      whiteSpace: "revert",
    },
  },
});

/**
 * Minimum style to allow to style meter element
 */
globalStyle("meter", {
  "@layer": {
    [layers.reset]: {
      WebkitAppearance: "revert",
      appearance: "revert",
    },
  },
});

/**
 * Preformatted text - use only for this feature
 */
globalStyle(":where(pre)", {
  "@layer": {
    [layers.reset]: {
      all: "revert",
      boxSizing: "border-box",
    },
  },
});

/**
 * Reset default text opacity of input placeholder
 */
globalStyle("::placeholder", {
  "@layer": {
    [layers.reset]: {
      color: "unset",
    },
  },
});

/**
 * Fix the feature of 'hidden' attribute. display:revert; revert to element
 * instead of attribute
 */
globalStyle(":where([hidden])", {
  "@layer": {
    [layers.reset]: {
      display: "none",
    },
  },
});

/**
 * Revert for bug in Chromium browsers
 *
 * - Fix for the content editable attribute will work properly.
 * - Webkit-user-select: auto; added for Safari in case of using user-select:none
 *   on wrapper element
 */
globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
  // @ts-expect-error: -webkit-line-break is a non-standard property
  "@layer": {
    [layers.reset]: {
      MozUserModify: "read-write",
      WebkitUserModify: "read-write",
      overflowWrap: "break-word",
      WebkitLineBreak: "after-white-space",
      WebkitUserSelect: "auto",
    },
  },
});

/**
 * Apply back the draggable feature - exist only in Chromium and Safari
 */
globalStyle(':where([draggable="true"])', {
  "@layer": {
    [layers.reset]: {
      // @ts-expect-error: -webkit-user-drag is a non-standard property
      WebkitUserDrag: "element",
    },
  },
});

/**
 * Revert Modal native behavior
 */
globalStyle(":where(dialog:modal)", {
  "@layer": {
    [layers.reset]: {
      all: "revert",
      boxSizing: "border-box",
    },
  },
});



