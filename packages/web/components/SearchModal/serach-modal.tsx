import { useEffect, useState, useTransition } from "react";
import { Button, Input, Flex, Typography } from "@monorepo/ui";
import PostList from "../PostList/post-list";
import ModalTags from "./modal-tags";
import { useSearchModalHandler } from "./handler/useSearchModalHandler";
import { Modal } from "@monorepo/ui";
import ListDataBoundary from "@/boundary/ListDataBoundary";

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
    <Modal isOpen={isOpen} onClose={() => handleClose(onClose)}>
      <Modal.Header>포스트를 검색해보세요.</Modal.Header>
      <Modal.ContentBody>
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
        </Flex>
        {isPending ? <div>Searching...</div> : null}
        {showResults ? (
          <ListDataBoundary dataLength={filteredPosts.length}>
            <Typography>검색 결과</Typography>
            <PostList posts={filteredPosts} isSearchModal={true} />
          </ListDataBoundary>
        ) : (
          <Typography>검색어를 입력하거나 태그를 선택해주세요.</Typography>
        )}
      </Modal.ContentBody>
      <Modal.Footer>
        <Button onClick={() => handleClose(onClose)}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
