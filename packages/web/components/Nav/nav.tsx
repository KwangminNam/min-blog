"use client";

import { APP_PATH } from "@/constant/appPath";
import { Flex } from "@kwangmins-blog/ui";
import { usePathname } from "next/navigation";
import NavLink from "./_components/nav-link";
import { capitalize } from "@kwangmins-blog/util";

const Nav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Flex gap={"medium"}>
        <NavLink
          path={APP_PATH.root}
          className={pathname === `${APP_PATH.root}` ? "nav is-active" : "nav"}
          text={capitalize('home')}
        />
        <NavLink
          path={APP_PATH.blog}
          className={
            pathname.startsWith(`/${APP_PATH.blog}`) ? "nav is-active" : "nav"
          }
          text={capitalize(APP_PATH.blog)}
        />
      </Flex>
    </nav>
  );
};

export default Nav;
