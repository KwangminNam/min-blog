import { SITE } from "@/constant/stie";
import { Flex, GithubIcon, MailIcon } from "@monorepo/ui";

import Link from "next/link";

const SiteHeader: React.FC = () => {
  return (
    <Flex gap={"small"}>
      <Link href={SITE.url.github} target="_blank">
        <GithubIcon size={30} />
      </Link>
      <Link href={SITE.url.github} target="_blank">
        <MailIcon size={30} />
      </Link>
    </Flex>
  );
};

export default SiteHeader;
