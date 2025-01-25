"use client";

import { APP_PATH } from "@/constant/appPath";
import { Flex } from "@monorepo/ui";
import { usePathname } from "next/navigation";
import NavLink from "./_components/nav-link";

const Nav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Flex gap={"medium"}>
        <NavLink
          path={APP_PATH.home}
          className={pathname === `${APP_PATH.home}` ? "nav is-active" : "nav"}
          text="Home"
        />
        <NavLink
          path={APP_PATH.blog}
          className={
            pathname.startsWith(`/${APP_PATH.blog}`) ? "nav is-active" : "nav"
          }
          text="Blog"
        />
      </Flex>
    </nav>
  );
};

export default Nav;
