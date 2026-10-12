import { keyframes, style } from "@vanilla-extract/css";
import { themeColor } from "@kwangmins-blog/ui";

const shimmer = keyframes({
  "0%": { transform: "translateX(-150%) skewX(-20deg)" },
  "100%": { transform: "translateX(250%) skewX(-20deg)" },
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
  backgroundColor: `color-mix(in srgb, ${themeColor.color.secondaryFontColor} 18%, transparent)`,
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    // 블록 폭의 60% 짜리 빛줄기가 왼쪽 → 오른쪽으로 비스듬히 지나간다.
    width: "60%",
    background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, ${themeColor.color.mainFontColor} 55%, transparent) 50%, transparent 100%)`,
    animation: `${shimmer} 1.1s ease-in-out infinite`,
    // 첫 프레임부터 빛줄기가 이미 블록 안을 지나가고 있도록 시작 지점을 당긴다.
    // (조회수는 보통 0.2초 안에 도착해, 처음부터 시작하면 움직임이 거의 안 보인다)
    animationDelay: "-0.45s",
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
