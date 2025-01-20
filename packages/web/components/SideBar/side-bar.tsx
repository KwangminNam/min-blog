"use client";

import { sideBar } from "./side-bar.css";

import Tags from "../Tag/tags";
import { Flex, Typography } from "@monorepo/ui";

const SideBar: React.FC = () => {
  return (
    <div
      className={sideBar}
      style={{
        position: "sticky",
        top: "25%",
        transform: "translateY(-50%)"
      }}
    >
      <Typography variant="medium">Tags</Typography>
      <Flex gap="small" direction="row" wrap="wrap">
        <Tags />
      </Flex>
    </div>
  );
};

export default SideBar;
