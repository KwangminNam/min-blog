"use client";

import React from "react";
import {
  header,
  headerContainer,
  headerHidden,
  headerVisible,
} from "./header.css";
import { Flex } from "@kwangmins-blog/ui";
import ToggleTheme from "../ToggleTheme/toggle-theme";
import SearchModal from "../SearchModal/serach-modal";

import Nav from "../Nav/nav";
import SearchButton from "../SearchButton/search-button";
import { useSearchModal } from "@/context/modal-context";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "../ScrollProgressBar/scroll-progress-bar";
import { useScroll, useShortCut } from "@kwangmins-blog/util";

const Header: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useSearchModal();
  const { visible } = useScroll();
  const pathname = usePathname();
  const isPostPage = /^\/blog\/[^/]+$/.test(pathname);
  useShortCut({
    "meta+k": () => setIsModalOpen(true),
  });
  return (
    <>
      <header className={`${header} ${visible ? headerVisible : headerHidden}`}>
        <div className={headerContainer}>
          <Nav />
          <Flex gap={"medium"} align="center">
            <SearchButton setIsSearchOpen={setIsModalOpen} />
            <ToggleTheme />
          </Flex>
          <SearchModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </header>
      {isPostPage && <ScrollProgressBar />}
    </>
  );
};

export default Header;
