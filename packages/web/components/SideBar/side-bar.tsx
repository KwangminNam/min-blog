import { getAllTags } from "@/util/util";
import { sideBar } from "./side-bar.css";
import Tag from "../Tag/tag";
import { Flex } from "@monorepo/ui";

const SideBar: React.FC = () => {
  const tags = getAllTags();
  return (
    <div className={sideBar}>
      <Flex gap="small" direction="column">
        {tags.map((tag) => (
          <Tag tag={tag as string} />
        ))}
      </Flex>
    </div>
  );
};

export default SideBar;
