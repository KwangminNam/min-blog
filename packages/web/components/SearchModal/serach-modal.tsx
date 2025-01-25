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
      <Flex direction="column" gap="medium" css={{ height: "100%" }}>
        <Modal.Header>포스트를 검색해보세요.</Modal.Header>
        <Flex
          direction="column"
          gap="medium"
          css={{ padding: "1rem", flex: 1, height: "100%", overflow: "scroll" }}
        >
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
            {isPending ? (
              <Typography variant="small">Searching...</Typography>
            ) : null}
            {showResults ? (
              <ListDataBoundary dataLength={filteredPosts.length}>
                <Typography>검색 결과</Typography>
                <PostList posts={filteredPosts} isSearchModal />
              </ListDataBoundary>
            ) : (
              <Flex justify="center" align="center" css={{ height: "100%" }}>
                <Typography>
                  검색어를 입력하거나 태그를 선택해주세요.
                </Typography>
              </Flex>
            )}
          </Modal.ContentBody>
        </Flex>
        <Modal.Footer>
          <Button onClick={() => handleClose(onClose)}>닫기</Button>
        </Modal.Footer>
      </Flex>
    </Modal>
  );
};

export default SearchModal;
