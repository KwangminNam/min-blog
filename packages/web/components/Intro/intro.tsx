import { Flex, Heading, Typography } from "@kwangmins-blog/ui";

interface IIntro {
  title: string;
  description: string;
}

const Intro: React.FC<IIntro> = ({ title, description }) => {
  return (
    <Flex css={{ width: "100%" }} direction="column" align="center" gap="medium">
      <Heading level="h1">{title}</Heading>
      <Typography variant="smallest">{description}</Typography>
    </Flex>
  );
};

export default Intro;
