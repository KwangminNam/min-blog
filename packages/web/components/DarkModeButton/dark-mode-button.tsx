"use client";

import { useTheme } from "next-themes";
import { DarkIcon, Flex, SunIcon } from "@monorepo/ui";
import { useState } from "react";
import * as styles from "./dark-mode-button.css";

const DarkModeBtn: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const handleThemeChange = (theme: string) => {
    setIsRotating(true);
    setTheme(theme);
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <Flex gap="medium">
      {resolvedTheme === "light" ? (
        <button
          className={isRotating ? styles.rotate : undefined}
          onClick={() => handleThemeChange("dark")}
        >
          <SunIcon size={24} />
        </button>
      ) : (
        <button
          className={isRotating ? styles.rotate : undefined}
          onClick={() => handleThemeChange("light")}
        >
          <DarkIcon size={24} />
        </button>
      )}
    </Flex>
  );
};

export default DarkModeBtn;
