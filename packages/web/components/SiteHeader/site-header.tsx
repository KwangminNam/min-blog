import { Flex, GithubIcon, MailIcon } from "@monorepo/ui";

const SiteHeader: React.FC = () => {
  return (
    <Flex gap={"small"}>
      <GithubIcon size={24} />
      <MailIcon size={24} />
    </Flex>
  );
};

export default SiteHeader;
