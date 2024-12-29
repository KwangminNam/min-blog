"use client";

import Link from "next/link";
import { slug } from "github-slugger";
import { tag as tagStyle } from "./tag.css";
import { getAllTags } from "@/util/util";
import { useParams } from "next/navigation";

const Tags: React.FC = () => {
  const tags = getAllTags();
  const parama = useParams();

  const currentTag = parama.tag;
  return (
    <>
      {tags.map((tag) => (
        <div className={tagStyle({ current: currentTag === slug(tag) })}>
          <Link
            href={`/tag/${slug(tag)}`}
            style={{
              textDecoration: currentTag === slug(tag) ? "underline" : "none",
              color: currentTag === slug(tag) ? "#fff" : "inherit"
            }}
          >
            {tag}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Tags;
