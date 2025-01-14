"use client";

import { slug } from "github-slugger";
import { getAllTags } from "@/util/util";
import { tag as tagStyle } from "../Tag/tag.css";
interface ModalTagsProps {
  onClick: (tag: string) => void;
  tagState: string;
}

const ModalTags: React.FC<ModalTagsProps> = ({ onClick, tagState }) => {
  const tags = getAllTags();

  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag}
          onClick={() => onClick(tag)}
          className={tagStyle({ current: tagState === slug(tag) })}
          style={{
            textDecoration: tagState === slug(tag) ? "underline" : "none",
            color: tagState === slug(tag) ? "#fff" : "inherit",
          }}
        >
          {tag}
        </div>
      ))}
    </>
  );
};

export default ModalTags;
