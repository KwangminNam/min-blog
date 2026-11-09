"use client";

import { type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import React from "react";
import useIsClient from "../ClientOnly/use-is-client";

const Portal = ({ children }: PropsWithChildren): React.ReactPortal | null => {
  const isClient = useIsClient();
  if (!isClient || !children) return null;

  const element = document.querySelector(`#portal`);
  return element ? createPortal(children, element) : null;
};

export default Portal;
