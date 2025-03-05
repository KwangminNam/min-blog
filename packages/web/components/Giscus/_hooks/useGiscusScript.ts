import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { THEME } from "@kwangmins-blog/util";

export const useGiscusScript = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const theme = resolvedTheme === THEME.dark ? THEME.dark : THEME.light;

  useEffect(() => {
    if (
      !process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID ||
      !process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO ||
      !process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY ||
      !process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID ||
      !ref.current ||
      ref.current.hasChildNodes()
    )
      return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO);
    scriptElem.setAttribute(
      "data-repo-id",
      process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID
    );
    scriptElem.setAttribute(
      "data-category",
      process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY
    );
    scriptElem.setAttribute(
      "data-category-id",
      process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID
    );
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", theme);
    scriptElem.setAttribute("data-lang", "ko");

    scriptElem.onload = () => setIsLoading(false);
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

  return {
    ref,
    isLoading,
  }
}

