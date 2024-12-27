"use client";

import { useTheme } from "next-themes";

const DarkModeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        aria-label="DarkModeBtn"
      >
        {resolvedTheme}
        <div>sun button</div>
        <div>moon button</div>
      </button>
    </div>
  );
};

export default DarkModeBtn;
