"use client"

import { useState } from "react";
import useMount from "./useMount";
import { BREAKPOINTS, DEVICE_TYPE } from "../constants";

const useDisplaySize = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [deviceType, setDeviceType] = useState<keyof typeof DEVICE_TYPE>(DEVICE_TYPE.DESKTOP);

  const updateDeviceType = () => {
    const width = window.innerWidth;
    setInnerWidth(width);

    if (width < BREAKPOINTS.TABLET) {
      setDeviceType(DEVICE_TYPE.MOBILE);
    } else if (width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP) {
      setDeviceType(DEVICE_TYPE.TABLET);
    } else {
      setDeviceType(DEVICE_TYPE.DESKTOP);
    }
  };

  useMount(() => {
    updateDeviceType();

    window.addEventListener('resize', updateDeviceType);
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  });

  return {
    innerWidth,
    deviceType,
    isDesktop: deviceType === DEVICE_TYPE.DESKTOP,
    isTablet: deviceType === DEVICE_TYPE.TABLET,
    isMobile: deviceType === DEVICE_TYPE.MOBILE
  };
};

export default useDisplaySize;