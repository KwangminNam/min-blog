import { IconBaseProps } from "react-icons";
import { BsFillSunFill } from "react-icons/bs";

const SunIcon: React.FC<IconBaseProps> = (props) => {
  return <BsFillSunFill size={30} {...props} />;
};

export default SunIcon;
