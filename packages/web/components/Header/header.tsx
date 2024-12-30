"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { header } from "./header.css";
import GNB from "../GNB/gnb";
import { Button, Flex, Heading, Input } from "@monorepo/ui";
import SiteHeader from "../SiteHeader/site-header";
import ToggleTheme from "../ToggleTheme/toggle-theme";
import SearchModal from "../SearchModal/serach-modal";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
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
