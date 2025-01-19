"use client";

import { sideBar } from "./side-bar.css";

import Tags from "../Tag/tags";
import { Flex } from "@monorepo/ui";

const SideBar: React.FC = () => {
  return (
    <div className={sideBar}>
      <Flex gap="small" direction="row" wrap="wrap">
        <Tags />
      </Flex>
    </div>
  );
};

export default SideBar;
