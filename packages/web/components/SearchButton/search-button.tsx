import {
  Button,
  Flex,
  Kbd,
  themeColor,
  Typography,
  vars,
} from "@kwangmins-blog/ui";

import { SearchIcon } from "@kwangmins-blog/ui";
import { searchButton } from "./search-button.css";
import { useDisplaySize } from "@kwangmins-blog/util";

interface ISearchButton {
  setIsSearchOpen: (isOpen: boolean) => void;
}

const SearchButton: React.FC<ISearchButton> = ({ setIsSearchOpen }) => {
  const { isMobile } = useDisplaySize();
  return (
    <>
      {isMobile ? (
        <SearchIcon
          onClick={() => setIsSearchOpen(true)}
          size="30"
          color={themeColor.color.secondaryFontColor}
        />
      ) : (
        <Button
          variant="inputStyle"
          className={searchButton}
          size="xlarge"
          hasIcon
          icon={<SearchIcon color={themeColor.color.secondaryFontColor} />}
          onClick={() => setIsSearchOpen(true)}
        >
          <Flex
            css={{ width: "100%" }}
            align="center"
            gap="small"
            justify="between"
          >
            <Typography
              css={{ fontSize: vars.size.px[13], color: vars.color.gray2 }}
            >
              Search
            </Typography>
            <Flex align="center" gap="smallest">
              <Kbd>⌘ K</Kbd>
            </Flex>
          </Flex>
        </Button>
      )}
    </>
  );
};

export default SearchButton;
