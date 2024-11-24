import { posts } from "#site/content/blog";
import { Button } from "@monorepo/ui";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((it) => it.slugAsParams === params.slug);
  // if (!post) return notFound();
  return (
    <ul>
      <li>11</li>
      <li>22</li>
      <li>33</li>
    </ul>
  );
}
