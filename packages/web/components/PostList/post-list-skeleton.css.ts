import { style } from "@vanilla-extract/css";

// PostItem(높이 140, 상하 20px 패딩, 썸네일 100x75)과 같은 치수로 맞춰 교체 시 흔들림을 줄인다.
export const item = style({
  display: "flex",
  gap: 24,
  height: 140,
  padding: "20px 0",
  boxSizing: "border-box",
});

export const thumbnail = style({
  flexShrink: 0,
  width: 100,
  height: 75,
  borderRadius: 8,
});

export const lines = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flex: 1,
  minWidth: 0,
});

export const line = style({
  display: "block",
  height: 12,
  borderRadius: 999,
});
