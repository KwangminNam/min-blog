import { posts } from "#site/content/blog";

export interface IPostItemProps {
  slug: string;
  title: string;
  description?: string;
  index: number;
  slugAsParams?: string;
  date: string;
  tags?: string[];
  viewCount?: number;
}
