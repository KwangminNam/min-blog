import React from "react";

import Link from "next/link";
import { header } from "./header.css";
import GNB from "../GNB/gnb";
import { Flex } from "@monorepo/ui";
import SiteHeader from "../SiteHeader/site-header";
import ToggleTheme from "../ToggleTheme/toggle-theme";

const Header: React.FC = () => {
  return (
    <header className={header}>
      <Flex gap={"small"}>
        <h1>
          <Link href="/">Kwangmin's Blog</Link>
        </h1>
        <GNB />
      </Flex>
      <Flex gap={"small"}>
        <SiteHeader />
        <ToggleTheme />
      </Flex>
    </header>
  );
};

export default Header;
