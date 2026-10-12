import { Typography } from "@kwangmins-blog/ui";
import PagedPostList from "@/components/PostList/paged-post-list";
import { tag as tagStyle } from "@/components/Tag/tag.css";
import { decodeTagParam, getAllTags, getPostsByTag } from "@/util/post-util";
import { slug } from "github-slugger";

/** 목록 링크(Tag 컴포넌트)와 같은 slug 규칙으로 만든 태그 목록. */
export const getTagSlugs = () => Array.from(new Set(getAllTags().map((t) => slug(t))));

/** 태그 제목 + 페이지 목록. 정적 데이터만 쓰므로 빌드 목록에 있는 태그는 정적 셸에 포함된다. */
const TaggedPostList = ({ tagParam, currentPage }: { tagParam: string; currentPage: number }) => {
  const tagName = decodeTagParam(tagParam);
  const postsByTag = getPostsByTag(tagParam);

  return (
    <>
      <Typography variant="large">
        Selected Tag:
        <strong style={{ marginLeft: "10px" }} className={tagStyle({ strong: true })}>
          {tagName}
        </strong>
      </Typography>
      <PagedPostList posts={postsByTag} currentPage={currentPage} basePath={`/tag/${tagName}`} />
    </>
  );
};

export default TaggedPostList;
