"use client"


import { getAllPostsBySearch } from "@/util/post-util";;
import { getPostsByTag } from "@/util/post-util";;
import { useEffect, useState, useTransition } from "react";
import { useDebounce } from "@kwangmins-blog/util";

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
      if (debouncedSearchText || selectedTag) {
        const tagFilteredPosts = selectedTag ? getPostsByTag(selectedTag) : posts;
        setFilteredPosts(getAllPostsBySearch(debouncedSearchText, tagFilteredPosts));
      } else {
        setFilteredPosts([]);
      }
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

  const resetSearchState = () => {
    setSearchText("");
    setSelectedTag("");
  };

  const resetBodyOverflow = () => {
    document.body.style.overflow = "unset";
  };

  const handleClose = (onClose: () => void) => {
    resetSearchState();
    resetBodyOverflow();
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
