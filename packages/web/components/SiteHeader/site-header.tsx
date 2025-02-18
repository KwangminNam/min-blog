import { SITE } from "@/constant/site";
import { Flex, GithubIcon, MailIcon } from "@kwangmins-blog/ui";

import Link from "next/link";

const SiteHeader: React.FC = () => {
  return (
    <Flex gap={"small"}>
      <Link href={SITE.url.github} target="_blank">
        <GithubIcon size={27} />
      </Link>
      <Link href={SITE.url.github} target="_blank">
        <MailIcon size={27} />
      </Link>
    </Flex>
  );
};

export default SiteHeader;
