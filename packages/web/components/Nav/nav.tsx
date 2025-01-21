"use client";

import { APP_PATH } from "@/constant/appPath";
import { Flex } from "@monorepo/ui";

import { Typography } from "@monorepo/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Flex gap={"medium"}>
        <Link href={`/${APP_PATH.home}`}>
          <Typography
            className={pathname === `${APP_PATH.home}` ? "nav is-active" : "nav"}
            variant="medium"
          >
            Home
          </Typography>
        </Link>
        <Link href={`/${APP_PATH.blog}`}>
          <Typography
            className={
              pathname.startsWith(`/${APP_PATH.blog}`) ? "nav is-active" : "nav"
            }
            variant="medium"
          >
            Blog
          </Typography>
        </Link>
      </Flex>
    </nav>
  );
};

export default Nav;
