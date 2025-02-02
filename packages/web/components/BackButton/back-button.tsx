import Link from "next/link";
import { Flex, Heading, themeColor, Typography, ArrowIcon } from "@monorepo/ui";
import { backButton } from "./back-button.css";

interface IBackButton {
  text: string;
  to: string;
}

const BackButton: React.FC<IBackButton> = ({ text, to }) => {
  return (
    <Link className={backButton} href={to}>
      <Flex gap="small" align="center" justify="center">
        <ArrowIcon color={themeColor.color.secondaryFontColor} direction="left" size={16} />
        <Typography
          css={{ color: themeColor.color.secondaryFontColor }}
          variant="small"
        >
          {text}
        </Typography>
      </Flex>
    </Link>
  );
};

export default BackButton;
