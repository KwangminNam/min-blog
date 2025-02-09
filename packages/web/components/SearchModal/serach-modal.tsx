import { useEffect } from "react";
import { Button, Input, Flex, Typography } from "@monorepo/ui";
import PostList from "../PostList/post-list";
import ModalTags from "./modal-tags";
import { useSearchModalHandler } from "./handler/useSearchModalHandler";
import { Modal } from "@monorepo/ui";
import ListDataBoundary from "@/boundary/ListDataBoundary";
import TotalCount from "../TotalCount/total-count";
  import { useSearchModal } from "@/context/modal-context";

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
    selectedTag,
  } = useSearchModalHandler();

  const showResults = searchText.length > 0 || selectedTag !== "";
  const filteredPostLength = filteredPosts.length;

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

  const { setIsModalOpen } = useSearchModal();

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose(onClose)}>
      <Flex direction="column" gap="medium" css={{ height: "100%" }}>
        <Modal.Header>포스트를 검색해보세요.</Modal.Header>
        <Flex
          direction="column"
          gap="medium"
          css={{ padding: "1rem", flex: 1, height: "100%", overflow: "auto" }}
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
              <ListDataBoundary dataLength={filteredPostLength}>
                <Flex gap="small" justify="end">
                  <TotalCount totalCount={filteredPostLength} />
                </Flex>
                <PostList
                  posts={filteredPosts}
                  isSearchModal
                  onClick={() => setIsModalOpen(false)}
                />
              </ListDataBoundary>
            ) : null}
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
