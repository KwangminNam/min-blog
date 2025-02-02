import {
  Button,
  CommandIcon,
  Flex,
  Kbd,
  themeColor,
  Typography
} from "@monorepo/ui";

import { SearchIcon } from "@monorepo/ui";
import { kbd, searchButton } from "./search-button.css";

interface ISearchButton {
  setIsSearchOpen: (isOpen: boolean) => void;
}

const SearchButton: React.FC<ISearchButton> = ({ setIsSearchOpen }) => {
  return (
    <Button
      variant="inputStyle"
      className={searchButton}
      size="xlarge"
      hasIcon
      icon={<SearchIcon />}
      onClick={() => setIsSearchOpen(true)}
    >
      <Flex
        css={{ width: "100%" }}
        align="center"
        gap="small"
        justify="between"
      >
        <Typography css={{ fontSize: "13px", color: "#666" }}>
          Search
        </Typography>
        <Flex align="center" gap="smallest">
          <Kbd>⌘ K</Kbd>
        </Flex>
      </Flex>
    </Button>
  );
};

export default SearchButton;
