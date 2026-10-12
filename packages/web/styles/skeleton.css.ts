import { keyframes, style } from "@vanilla-extract/css";
import { themeColor } from "@kwangmins-blog/ui";

const shimmer = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

const pulse = keyframes({
  "0%, 100%": { opacity: 0.55 },
  "50%": { opacity: 1 },
});

const revealKeyframes = keyframes({
  from: { opacity: 0, filter: "blur(4px)", transform: "translateY(2px)" },
  to: { opacity: 1, filter: "blur(0)", transform: "translateY(0)" },
});

/**
 * 스켈레톤 공용 블록. 테마 보조 글자색을 옅게 깔고 그 위로 하이라이트가 흐른다.
 * display / 크기 / 모양은 사용하는 쪽에서 지정한다.
 */
export const shimmerBlock = style({
  position: "relative",
  overflow: "hidden",
  backgroundColor: `color-mix(in srgb, ${themeColor.color.secondaryFontColor} 14%, transparent)`,
  "::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, ${themeColor.color.secondaryFontColor} 28%, transparent) 50%, transparent 100%)`,
    animation: `${shimmer} 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: `${pulse} 1.6s ease-in-out infinite`,
      "::after": { animation: "none", display: "none" },
    },
  },
});

/** 스트리밍으로 실제 값이 도착했을 때 부드럽게 드러낸다. */
export const reveal = style({
  display: "inline-block",
  animation: `${revealKeyframes} 420ms cubic-bezier(0.22, 1, 0.36, 1) both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": { animation: "none" },
  },
});
