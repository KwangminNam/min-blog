import Link from "next/link";
import { slug } from "github-slugger";
import { tag as tagStyle } from "./tag.css";
import { vars } from "@kwangmins-blog/ui";


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
          color: vars.color.white
        }}
      >
        {tag}
      </Link>
    </div>
  );
};

export default Tag;
