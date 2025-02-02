import React from "react";
import { IconBaseProps } from "react-icons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

interface IArrowIconProps extends IconBaseProps {
  direction: "up" | "down" | "left" | "right";
}

export default function ArrowLongIcon(props: IArrowIconProps) {
  switch (props.direction) {
    case "up":
      return <FaArrowUp {...props} />;
    case "down":
      return <FaArrowDown {...props} />;
    case "left":
      return <FaArrowLeft {...props} />;
    default:
      return <FaArrowRight {...props} />;
  }
}
