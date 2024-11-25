import { posts } from "#site/content/blog";

export interface IPostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
}
