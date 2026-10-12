"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { DarkIcon, SunIcon } from "@kwangmins-blog/ui";
import * as styles from "./dark-mode-button.css";
import { THEME, useMount } from "@kwangmins-blog/util";

const DarkModeBtn: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  // 서버는 사용자 테마를 모르므로, 아이콘은 마운트 후에만 그려 하이드레이션 불일치를 막는다.
  const [mounted, setMounted] = useState(false);
  useMount(() => setMounted(true));
  const isDark = resolvedTheme === THEME.dark;
  const Icon = isDark ? DarkIcon : SunIcon;

  return (
    <button
      className={styles.switchButton}
      data-theme={mounted ? resolvedTheme : undefined}
      onClick={() => setTheme(isDark ? THEME.light : THEME.dark)}
      aria-label="Toggle dark mode"
    >
      <div className={styles.slider}>
        {mounted && <Icon size={15} className={styles.icon} />}
      </div>
    </button>
  );
};

export default DarkModeBtn;
