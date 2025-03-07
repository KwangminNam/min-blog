"use client"

import { EffectCallback, useEffect } from "react";

const useMount = (fn: EffectCallback) => {
  useEffect(() => {
    fn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;