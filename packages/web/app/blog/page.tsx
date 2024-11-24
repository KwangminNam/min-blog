import PostList from "@/components/PostList/post-list";
import { Button } from "@monorepo/ui";

export default async function Page(params: any) {
  
  return <PostList searchParams={params.searchParams} />;
}
