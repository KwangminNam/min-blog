import { createGlobalTheme, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';
import * as layers from "./layers.css";

export const vars = createGlobalTheme(":root", {
  color: {
    primaryDarkBackground: "#1a2847",
    primaryLightBackground: "#f7f9fa",
    buttonDarkBackground: "#141d26",
    buttonLightBackground: "#0056b3",
    buttonBackgroundHover: "#0056b3",
    secondaryBackground: "#D35400",
    secondaryFontColor: "#94a3b8",
    white: "#fff",
    black: "#000",
    accent: "#080",
    primary: "#0f1a33",
    secondary: "#6c757d",
    success: "#28a745",
    gray: "#ccc",
    error: "#dc3545"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  },
  fontSize: {
    small: "12px",
    medium: "16px",
    large: "20px"
  }
});


export const themeColor = createThemeContract({
  color: {
    mainBackground: null,
    mainFontColor: null,
    secondaryFontColor: null,
    thirdFontColor: null,
    tagColor: null,
    buttonBackground: null,
    buttonBackgroundHover: null,
    borderColor: null,
  },
});


export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: vars.color.primaryLightBackground,
    buttonBackground: '#3400f6',
    secondaryFontColor: '#333',
    tagColor: vars.color.secondaryBackground,
    buttonBackgroundHover: '#0056b3',
    mainFontColor: '#2c2c2c',
    borderColor: '#0f1a33',
    thirdFontColor: vars.color.black,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: vars.color.primaryDarkBackground,
    buttonBackground: vars.color.buttonDarkBackground,
    tagColor: vars.color.secondaryBackground,
    buttonBackgroundHover: '#0056b3',
    mainFontColor: '#fff',
    secondaryFontColor: vars.color.secondaryFontColor,
    borderColor: '#f7f9fa',
    thirdFontColor: vars.color.gray,
  },
});



globalStyle("html, body", {
  backgroundColor: themeColor.color.mainBackground,
  color: "#fff"
});

globalStyle(".article", {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

globalStyle(".button-link", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "1.5rem",
  backgroundColor: themeColor.color.buttonBackground,
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
      width: "2px",
      height: "6px",
    },
  },
});

globalStyle("::-webkit-scrollbar-track", {
  "@layer": {
    [layers.reset]: {
      background: "transparent",
    },
  },
});

globalStyle("::-webkit-scrollbar-thumb", {
  "@layer": {
    [layers.reset]: {
      background: '#555',
      borderRadius: "3px",
      width: "2px",
    },
  },
});

globalStyle("::-webkit-scrollbar-thumb:hover", {
  "@layer": {
    [layers.reset]: {
      background: "#555",
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



