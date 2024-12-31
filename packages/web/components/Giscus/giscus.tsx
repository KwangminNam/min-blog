"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const theme = resolvedTheme === "dark" ? "dark" : "light";
  useEffect(() => {
    if (
      !process.env.NEXT_PUBLIC_GITHUB_REPO_ID ||
      !process.env.NEXT_PUBLIC_GITHUB_REPO ||
      !process.env.NEXT_PUBLIC_GITHUB_CATEGORY ||
      !process.env.NEXT_PUBLIC_GITHUB_CATEGORY_ID ||
      !ref.current ||
      ref.current.hasChildNodes()
    )
      return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", process.env.NEXT_PUBLIC_GITHUB_REPO);
    scriptElem.setAttribute(
      "data-repo-id",
      process.env.NEXT_PUBLIC_GITHUB_REPO_ID
    );
    scriptElem.setAttribute(
      "data-category",
      process.env.NEXT_PUBLIC_GITHUB_CATEGORY
    );
    scriptElem.setAttribute(
      "data-category-id",
      process.env.NEXT_PUBLIC_GITHUB_CATEGORY_ID
    );
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", theme);
    scriptElem.setAttribute("data-lang", "ko");

    scriptElem.onload = () => setIsLoading(false); // 스크립트 로드 완료 후 로딩 상태 해제
    ref.current.appendChild(scriptElem);
  }, [theme]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app"
    );
  }, [theme]);

  return (
    <section>
      {isLoading && <p>댓글 로딩 중...</p>} {/* 로딩 상태 표시 */}
      <div ref={ref} />
      <div>
        {JSON.stringify(process.env.NEXT_PUBLIC_APP_ENVIRONMENT ?? "test")}
      </div>
    </section>
  );
}
