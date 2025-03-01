"use client";

import { useEffect, useState } from "react";
import {
  progressWidthVar,
  scrollProgressBar,
  scrollProgressBarBar,
  scrollProgressBarHidden,
  scrollProgressBarVisible
} from "./scroll-progress-bar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { headerVisible } from "../Header/header.css";
import { useScroll } from "@/hooks/useScroll";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { visible } = useScroll();
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
    <div className={`${scrollProgressBar} ${visible ? scrollProgressBarVisible : scrollProgressBarHidden}`}>
      <div
        className={scrollProgressBarBar}
        style={assignInlineVars({
          [progressWidthVar]: `${scrollProgress}%`
        })}
      />
    </div>
  );
}
