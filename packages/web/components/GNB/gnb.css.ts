import { style, globalStyle } from "@vanilla-extract/css";

export const gnb = style({});

globalStyle(`${gnb} ul`, {
  display: "flex",
  gap: "12px",
  listStyle: "none",
  padding: 0,
  margin: 0,
});