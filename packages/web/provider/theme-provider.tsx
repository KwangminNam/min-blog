"use client";

import { useMount } from "@kwangmins-blog/util";
import { darkTheme, lightTheme } from "@kwangmins-blog/ui";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type PropsWithChildren, useState } from "react";

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
