"use client"

import { EffectCallback, useEffect } from "react";

const useMount = (fn: EffectCallback) => {
  useEffect(() => {
    fn();
  }, []);
};

export default useMount;