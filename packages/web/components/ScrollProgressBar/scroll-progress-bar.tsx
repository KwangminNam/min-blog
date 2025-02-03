"use client";

import { useEffect, useState } from "react";
import {
  progressWidthVar,
  scrollProgressBar,
  scrollProgressBarBar
} from "./scroll-progress-bar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / totalHeight) * 100;

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className={scrollProgressBar}>
      <div
        className={scrollProgressBarBar}
        style={assignInlineVars({
          [progressWidthVar]: `${scrollProgress}%`
        })}
      />
    </div>
  );
}
