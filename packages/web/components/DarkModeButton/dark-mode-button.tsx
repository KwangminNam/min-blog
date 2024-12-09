// DarkModBtn.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={""} />;

  return (
    <div>
      <button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        aria-label="DarkModeBtn"
      >
        <div>sun button</div>
        <div>moon button</div>
      </button>
    </div>
  );
};

export default DarkModeBtn;
