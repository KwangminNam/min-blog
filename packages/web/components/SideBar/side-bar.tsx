"use client";

import { useState } from "react";
import { getAllTags } from "@/util/util";
import { sideBar } from "./side-bar.css";

import Tags from "../Tag/tags";
import { Flex, Button } from "@monorepo/ui";
import SearchModal from "../SearchModal/serach-modal";

const SideBar: React.FC = () => {
  return (
    <div className={sideBar}>
      <Flex gap="small" direction="column">
        <Tags />
      </Flex>
    </div>
  );
};

export default SideBar;
