import { useEffect, useState, useTransition } from "react";
import { Portal } from "../Portal/Portal";
import { Button, Input, Flex, Typography } from "@monorepo/ui";
import { overlay, searchModal } from "./search-modal.css";
import PostList from "../PostList/post-list";
import Tags from "../Tag/tags";
import ModalTags from "./modal-tags";
import { useSearchModalHandler } from "./handler/useSearchModalHandler";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  if (!isOpen) return null;
  const {
    handleSearch,
    handleSearchByTag,
    handleClose,
    isPending,
    searchText,
    filteredPosts,
    selectedTag
  } = useSearchModalHandler();

  const showResults = searchText.length > 0 || selectedTag !== "";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose(onClose);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  return (
    <Portal>
      <div className={overlay} onClick={() => handleClose(onClose)}>
        <div className={searchModal} onClick={(e) => e.stopPropagation()}>
          <Flex direction="column" gap="medium">
            <Input
              placeholder="Search..."
              value={searchText}
              onChange={handleSearch}
              autoFocus
            />
            <Flex gap="small">
              <ModalTags onClick={handleSearchByTag} tagState={selectedTag} />
            </Flex>
            <Button onClick={() => handleClose(onClose)}>Close</Button>
          </Flex>
          {isPending ? <div>Searching...</div> : null}
          {showResults ? (
            filteredPosts.length > 0 ? (
              <>
                <Typography>검색 결과</Typography>
                <PostList posts={filteredPosts} />
              </>
            ) : (
              <Typography>검색 결과가 없습니다.</Typography>
            )
          ) : (
            <Typography>검색어를 입력하거나 태그를 선택해주세요.</Typography>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default SearchModal;
