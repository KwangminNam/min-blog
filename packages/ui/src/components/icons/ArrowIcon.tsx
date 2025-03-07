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

const ArrowIcon: React.FC<IArrowIconProps> = (props) => {
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

export default ArrowIcon;
