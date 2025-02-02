import React from "react";
import { IconBaseProps } from "react-icons";
import {
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown
} from "react-icons/io";

interface IArrowIconProps extends IconBaseProps {
  direction: "up" | "down" | "left" | "right";
}

export default function ArrowIcon(props: IArrowIconProps) {
  switch (props.direction) {
    case "up":
      return <IoIosArrowUp {...props} />;
    case "down":
      return <IoIosArrowDown {...props} />;
    case "left":
      return <IoIosArrowBack {...props} />;
    default:
      return <IoIosArrowForward {...props} />;
  }
}
