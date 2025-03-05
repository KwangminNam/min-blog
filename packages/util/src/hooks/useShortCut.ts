"use client"

import { useEffect } from "react";

interface IShortcutActions {
  [key: string]: () => void;
};

const useShortCut = (shortcutActions: IShortcutActions) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyCombination = `${event.metaKey ? 'meta+' : ''}${event.ctrlKey ? 'ctrl+' : ''}${event.key}`;
      if (shortcutActions[keyCombination]) {
        event.preventDefault();
        shortcutActions[keyCombination]();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcutActions]);
};

export default useShortCut;