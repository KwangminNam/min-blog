"use client";

import { darkTheme, lightTheme, THEME_TRANSITION_CLASS } from "@kwangmins-blog/ui";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type PropsWithChildren, useEffect } from "react";

/**
 * 마운트 전 null 을 반환하던 게이트를 제거했다.
 * 그 게이트 때문에 서버 HTML에 본문이 전혀 없었고(SSR/SEO 무력화), PPR 정적 셸도 만들어지지 않았다.
 * 테마 클래스는 next-themes 가 하이드레이션 전에 인라인 스크립트로 <html>에 적용하므로 깜빡임이 없다.
 */
const ThemeProvider = ({ children }: PropsWithChildren) => {
  // 테마가 적용된 첫 화면이 그려진 뒤에야 배경 전환 애니메이션을 켠다(첫 로딩 검은 화면 방지).
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      document.documentElement.classList.add(THEME_TRANSITION_CLASS)
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
