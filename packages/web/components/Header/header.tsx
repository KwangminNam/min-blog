"use client";

import React, { useState } from "react";

import Link from "next/link";
import { header } from "./header.css";
import { Button, Flex, Heading } from "@monorepo/ui";
import SiteHeader from "../SiteHeader/site-header";
import ToggleTheme from "../ToggleTheme/toggle-theme";
import SearchModal from "../SearchModal/serach-modal";
import { useShortCut } from "@/hooks/useShortCut";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useShortCut({
    "meta+k": () => setIsSearchOpen(true),
  });
  return (
    <header className={header}>
      <Flex gap={"small"}>
        <Heading level="h1">
          <Link href="/">kwangmin</Link>
        </Heading>
      </Flex>
      <Flex gap={"small"}>
        <SiteHeader />
        <ToggleTheme />
        <Button onClick={() => setIsSearchOpen(true)}>Search command+k</Button>
      </Flex>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
};

export default Header;
