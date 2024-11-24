import { posts } from "#site/content/blog";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((it) => it.slugAsParams === params.slug);
  
  console.log(params)
  // if (!post) return notFound();
  return (
    <ul>
      <li>{post?.title}</li>
      <li>{post?.date}</li>
      <li>{post?.description}</li>
    </ul>
  );
}
