import { keyframes, style, styleVariants } from "@vanilla-extract/css";

const appear = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

/**
 * 대기 시간(animation-delay) 동안은 투명하게 자리만 차지하다가 짧게 나타난다.
 * JS 타이머가 아니라 CSS 로 지연하므로 PPR 정적 셸에서도 하이드레이션 없이 동작한다.
 */
const base = style({
  animation: `${appear} 150ms ease-out both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": { animationDuration: "1ms" },
  },
});

export const delay = styleVariants({
  span: [base, { display: "inline-block" }],
  div: [base, { display: "block" }],
});
