import { style, styleVariants } from "@vanilla-extract/css";
import { themeColor } from "@kwangmins-blog/ui";

export { reveal as revealed } from "@/styles/skeleton.css";

/** 라벨 + 숫자 자리. 실제 값과 같은 높이/정렬을 유지해 교체 시 레이아웃이 흔들리지 않는다. */
const skeletonBase = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  color: themeColor.color.secondaryFontColor,
  lineHeight: 1.5,
});

/** 상세(Typography small = 1rem) / 목록(Typography smallest = 0.85rem) */
export const skeleton = styleVariants({
  detail: [skeletonBase, { fontSize: "1rem" }],
  list: [skeletonBase, { fontSize: "0.85rem", gap: 4 }],
});

/** 숫자 자리의 알약 모양 바. 글자 크기(em)에 비례한다. */
export const bar = style({
  display: "inline-block",
  width: "2.75em",
  height: "0.95em",
  borderRadius: 999,
});
