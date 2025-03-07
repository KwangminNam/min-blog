
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

const ArrowLongIcon: React.FC<IArrowIconProps> = (props) => {
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

export default ArrowLongIcon;
