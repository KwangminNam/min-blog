import { Flex } from "@kwangmins-blog/ui";
import DarkModeBtn from "../DarkModeButton/dark-mode-button";

const ToggleTheme: React.FC = () => {
  return (
    <Flex gap="medium">
      <DarkModeBtn />
    </Flex>
  );
};

export default ToggleTheme;
