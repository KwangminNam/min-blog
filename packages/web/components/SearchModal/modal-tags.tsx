"use client";

import Link from "next/link";
import { slug } from "github-slugger";
import { getAllTags } from "@/util/util";
import { useParams } from "next/navigation";

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
          onClick={() => onClick(tag)}
          style={{
            textDecoration: tagState === slug(tag) ? "underline" : "none",
            color: tagState === slug(tag) ? "#fff" : "inherit"
          }}
        >
          {tag}
        </div>
      ))}
    </>
  );
};

export default ModalTags;
