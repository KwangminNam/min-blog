"use client";

import { THEME } from "@/constant/general";
import useMount from "@/hooks/useMount";
import { darkTheme, lightTheme } from "@monorepo/ui";
import { ThemeProvider, useTheme } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

interface ThemeProviderProps extends PropsWithChildren {}

const Provider = ({ children }: ThemeProviderProps) => {
  // const { resolvedTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useMount(() => {
  //   setMounted(true);
  // });

  // if (!mounted && resolvedTheme === THEME.light) {
  //   return <>{children}</>;
  // }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
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
