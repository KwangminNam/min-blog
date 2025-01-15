import { createGlobalTheme, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';
import * as layers from "./layers.css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#8b8",
    headerBackground: "#222",
    headerText: "#fff",
    white: "#fff",
    accent: "#080",
    primary: "#141d26",
    secondary: "#6c757d",
    success: "#28a745",
    error: "#dc3545"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
});


export const themeColor = createThemeContract({
  color: {
    mainBackground: null,
    contentBackground: null,
    mainFontColor: null,
    tagColor: null,
    buttonBackground: null,
    borderColor: null,
    gradient: null,
  },
});


export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#f7f9fa',
    contentBackground: 'red',
    buttonBackground: '#3400f6',
    tagColor: '#3400f6',

    mainFontColor: '#2c2c2c',
    borderColor: '#cbc9f9',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#0f1a33',
    contentBackground: '#2c2c2c',
    buttonBackground: 'red',
    tagColor: '#1e293d',

    mainFontColor: '#fff',
    borderColor: '#b1b1b3',
    gradient: 'linear-gradient(#091236, #1E215D)',
  },
});




const varaibale = { ...global, themeColor };

globalStyle("html, body", {
  backgroundColor: themeColor.color.mainBackground,
  color: "#fff"
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
globalStyle("a, button, span", {
  "@layer": {
    [layers.reset]: {
      color: themeColor.color.mainFontColor,
      cursor: "pointer",
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



