"use client";

import { sideBar } from "./side-bar.css";

import Tags from "../Tag/tags";
import { Flex, Typography } from "@monorepo/ui";

const SideBar: React.FC = () => {
  return (
    <div className={sideBar}>
      <Typography variant="medium">Tags</Typography>
      <Flex
        gap="small"
        direction="row"
        wrap="wrap"
        css={{ overflow: "auto" }}
      >
        <Tags />
      </Flex>
    </div>
  );
};

export default SideBar;
