"use client";

import { type PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);
  const element =
    typeof window !== "undefined" && document.querySelector(`#portal`);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return element && children ? createPortal(children, element) : null;
};

export default Portal;
