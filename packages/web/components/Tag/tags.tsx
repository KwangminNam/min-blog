"use client";

import Link from "next/link";
import { slug } from "github-slugger";
import { tag as tagStyle } from "./tag.css";
import { getAllTags } from "@/util/post-util";;
import { useParams } from "next/navigation";
import { TAG_PREFIX } from "@/constant/general";

const Tags: React.FC = () => {
  const tags = getAllTags();
  const params = useParams();

  const currentTag = params.tag;
  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag}
          className={tagStyle({ current: currentTag === slug(tag) })}
        >
          <Link
            href={`/tag/${slug(tag)}`}
            style={{
              textDecoration: currentTag === slug(tag) ? "underline" : "none",
              color: currentTag === slug(tag) ? "#fff" : "inherit"
            }}
          >
            {TAG_PREFIX} {tag}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Tags;
