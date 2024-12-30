import { useEffect, useState, useTransition } from "react";
import { Portal } from "../Portal/Portal";
import { Button, Input, Flex, Typography } from "@monorepo/ui";
import { overlay, searchModal } from "./search-modal.css";
import PostList from "../PostList/post-list";
import { getAllPosts } from "@/util/util";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const posts = getAllPosts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [isPending, startTransition] = useTransition();

  const handleClose = () => {
    setSearchTerm("");
    onClose();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    startTransition(() => {
      setFilteredPosts(getAllPosts(value));
    });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
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

  if (!isOpen) return null;

  return (
    <Portal>
      <div className={overlay} onClick={handleClose}>
        <div className={searchModal} onClick={(e) => e.stopPropagation()}>
          <Flex direction="column" gap="medium">
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              autoFocus
            />
            <Button onClick={handleClose}>Close</Button>
          </Flex>
          {isPending ? <div>Searching...</div> : null}
          {searchTerm.length > 0 ? <PostList posts={filteredPosts} /> : <Typography>검색 하신 결과가 나옵니다.</Typography>}
        </div>
      </div>
    </Portal>
  );
};

export default SearchModal;
