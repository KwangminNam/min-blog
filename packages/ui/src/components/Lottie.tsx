import React from "react";
import Lottie from "lottie-react";

export const LottieComponent = ({ animationData }: { animationData: any }) => {
  return <Lottie animationData={animationData} />;
};
