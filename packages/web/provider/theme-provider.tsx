"use client";

import { THEME } from "@/constant/general";
import useMount from "@/hooks/useMount";
import { darkTheme, lightTheme } from "@monorepo/ui";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

interface ThemeProviderProps extends PropsWithChildren {}

const Provider = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useMount(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
