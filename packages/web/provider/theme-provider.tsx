"use client";

import { darkTheme, lightTheme } from "@monorepo/ui";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

interface ThemeProviderProps extends PropsWithChildren {}

const Provider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme,
        dark: darkTheme
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
