import { Flex, Heading, themeColor, Typography, vars } from "@kwangmins-blog/ui";

interface IIntro {
  title: string;
  description: string;
}

const Intro: React.FC<IIntro> = ({ title, description }) => {
  return (
    <Flex
      css={{ width: "100%" }}
      direction="column"
      align="center"
      gap="medium"
    >
      <Heading level="h1">{title}</Heading>
      <Typography css={{ color: themeColor.color.secondaryFontColor }} variant="smallest">
        {description}
      </Typography>
    </Flex>
  );
};

export default Intro;
