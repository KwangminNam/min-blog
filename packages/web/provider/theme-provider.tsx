"use client";

import { THEME } from "@/constant/general";
import useMount from "@/hooks/useMount";
import { darkTheme, lightTheme } from "@monorepo/ui";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useMount(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
