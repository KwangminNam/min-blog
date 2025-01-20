"use client";

import React, { useState } from "react";

import Link from "next/link";
import {
  header,
  headerContainer,
  headerHidden,
  headerVisible
} from "./header.css";
import { Button, CommandIcon, Flex, Heading, Typography } from "@monorepo/ui";
import SiteHeader from "../SiteHeader/site-header";
import ToggleTheme from "../ToggleTheme/toggle-theme";
import SearchModal from "../SearchModal/serach-modal";
import { useShortCut } from "@/hooks/useShortCut";
import { useScroll } from "@/hooks/useScroll";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { visible } = useScroll();
  useShortCut({
    "meta+k": () => setIsSearchOpen(true)
  });
  return (
    <header className={`${header} ${visible ? headerVisible : headerHidden}`}>
      <div className={headerContainer}>
        <Flex gap={"small"}>
          <Heading level="h1">
            <Link href="/">KwangMinDev</Link>
          </Heading>
        </Flex>
        <Flex gap={"medium"} align="center">
          <SiteHeader />
          <ToggleTheme />
          <Button
            size="large"
            onClick={() => setIsSearchOpen(true)}
            icon={<CommandIcon size={16} />}
            hasIcon
          >
            <Typography variant="small">Command+K</Typography>
          </Button>
        </Flex>
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
