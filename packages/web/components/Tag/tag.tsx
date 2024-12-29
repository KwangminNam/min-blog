import Link from "next/link";
import { slug } from "github-slugger";
import { tag as tagStyle } from "./tag.css";
import { getAllTags } from "@/util/util";

const Tag: React.FC<{ tag: string; currentTag?: boolean }> = ({
  tag,
  currentTag
}) => {

  return (
    <div className={tagStyle({ current: currentTag })}>
      <Link
        href={`/tag/${slug(tag)}`}
        style={{
          textDecoration: currentTag ? "underline" : "none",
          color: currentTag ? "#fff" : "inherit"
        }}
      >
        {tag}
      </Link>
    </div>
  );
};

export default Tag
