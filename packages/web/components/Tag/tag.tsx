"use client";

import { getAllTags } from "@/util/util";
import { useRouter, useSearchParams } from "next/navigation"; // 추가

const Tag: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // 추가

  const allTags = getAllTags();
  const currentTag = searchParams.get("tag"); // 추가

  const handleTagClick = (tag: string) => {
    router.push(`?tag=${encodeURIComponent(tag)}`);
  };

  // console.log 제거
  return (
    <div>
      <button onClick={() => router.push("/")}>Reset</button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          style={{
            margin: "0.25rem",
            background: currentTag === tag ? "red" : "white" // 선택된 태그 표시 (선택사항)
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tag;
