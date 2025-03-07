import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

import { IconBaseProps } from "react-icons";

interface ICircleArrowIconProps extends IconBaseProps {
  direction: "left" | "right";
}

const CircleArrowIcon: React.FC<ICircleArrowIconProps> = (props) => {
  return props.direction === "right" ? (
    <FaCircleArrowRight {...props} />
  ) : (
    <FaCircleArrowLeft {...props} />
  );
};

export default CircleArrowIcon;
