"use client";

import { useTheme } from "next-themes";
import { DarkIcon, SunIcon } from "@kwangmins-blog/ui";
import * as styles from "./dark-mode-button.css";
import { THEME } from "@/constant/general";

const DarkModeBtn: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === THEME.dark;

  return (
    <button
      className={styles.switchButton}
      data-theme={resolvedTheme}
      onClick={() => setTheme(isDark ? THEME.light : THEME.dark)}
      aria-label="Toggle dark mode"
    >
      <div className={styles.slider}>
        {isDark ? (
          <DarkIcon size={15} className={styles.icon} />
        ) : (
          <SunIcon size={15} className={styles.icon} />
        )}
      </div>
    </button>
  );
};

export default DarkModeBtn;
