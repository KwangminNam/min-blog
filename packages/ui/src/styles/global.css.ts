import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
});

globalStyle('*', {
  boxSizing: 'inherit'
});

globalStyle('a', {
  color: 'red',
  textDecoration: 'none'
});

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#8b8",
    headerBackground: "#222",
    headerText: "#fff",
    accent: "#080",
    primary: "#007bff",
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
