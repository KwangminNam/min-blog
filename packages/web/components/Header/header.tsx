"use client";

import React, { useState } from "react";
import {
  header,
  headerContainer,
  headerHidden,
  headerVisible
} from "./header.css";
import { Flex } from "@monorepo/ui";
import SiteHeader from "../SiteHeader/site-header";
import ToggleTheme from "../ToggleTheme/toggle-theme";
import SearchModal from "../SearchModal/serach-modal";
import { useShortCut } from "@/hooks/useShortCut";
import { useScroll } from "@/hooks/useScroll";
import Nav from "../Nav/nav";
import SearchButton from "../SearchButton/search-button";
import ScrollProgressBar from "../ScrollProgressBar/scroll-progress-bar";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { visible } = useScroll();
  const pathname = usePathname();
  const isPostPage = /^\/blog\/[^/]+$/.test(pathname);
  useShortCut({
    "meta+k": () => setIsSearchOpen(true)
  });
  return (
    <>
      <header className={`${header} ${visible ? headerVisible : headerHidden}`}>
        <div className={headerContainer}>
          <Nav />
          <Flex gap={"medium"} align="center">
            <SiteHeader />
            <SearchButton setIsSearchOpen={setIsSearchOpen} />
            <ToggleTheme />
          </Flex>
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
        {isPostPage && <ScrollProgressBar />}
      </header>
    </>
  );
};

export default Header;
