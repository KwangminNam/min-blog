import Link from "next/link";
import { Flex, themeColor, Typography, ArrowLongIcon } from "@monorepo/ui";
import { backButton } from "./back-button.css";

interface IBackButton {
  text: string;
  href: string;
}

const BackButton: React.FC<IBackButton> = ({ text, href }) => {
  return (
    <Link className={backButton} href={href}>
      <Flex gap="small" align="center" justify="center">
        <ArrowLongIcon
          color={themeColor.color.secondaryFontColor}
          direction="left"
          size={15}
        />
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
