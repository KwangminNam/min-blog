
import { getAllPostsBySearch } from "@/util/util";
import { getPostsByTag } from "@/util/util";
import { useState, useTransition } from "react";

export const useSearchModalHandler = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const isNonPostsToSearch = selectedTag === "" || searchText === "";
  const posts = getAllPostsBySearch(undefined, undefined, isNonPostsToSearch);


  const [isPending, startTransition] = useTransition();

  const [filteredPosts, setFilteredPosts] = useState(posts);

  console.log(selectedTag, "selectedTag")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    startTransition(() => {
      const tagFilteredPosts = selectedTag ? getPostsByTag(selectedTag) : posts;
      setFilteredPosts(getAllPostsBySearch(value, tagFilteredPosts));
    });
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
