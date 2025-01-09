import useDebounce from "@/hooks/useDebounce";
import { getAllPostsBySearch } from "@/util/util";
import { getPostsByTag } from "@/util/util";
import { useEffect, useState, useTransition } from "react";

export const useSearchModalHandler = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const isNonPostsToSearch = selectedTag === "" || searchText === "";
  const posts = getAllPostsBySearch(undefined, undefined, isNonPostsToSearch);


  const [isPending, startTransition] = useTransition();

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const debouncedSearchText = useDebounce(searchText);

  useEffect(() => {
    startTransition(() => {
      const tagFilteredPosts = selectedTag ? getPostsByTag(selectedTag) : posts;
      setFilteredPosts(getAllPostsBySearch(debouncedSearchText, tagFilteredPosts));
    });
  }, [debouncedSearchText, selectedTag, posts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleSearchByTag = (tag: string) => {
    setSelectedTag(tag === selectedTag ? "" : tag);
    startTransition(() => {
      const tagFilteredPosts = tag === selectedTag ? posts : getPostsByTag(tag);
      setFilteredPosts(getAllPostsBySearch(searchText, tagFilteredPosts));
    });
  };

  const handleClose = (onClose: () => void) => {
    setSearchText("");
    setSelectedTag("");
    onClose();
  };

  return {
    handleSearch,
    handleSearchByTag,
    handleClose,
    isPending,
    filteredPosts,
    searchText,
    selectedTag
  };
};
