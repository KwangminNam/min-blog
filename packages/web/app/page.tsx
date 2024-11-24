import { Button, Flex, Typography } from "@monorepo/ui";
import { posts } from "#site/content/blog";
import Link from "next/link";

export default function Home() {
  console.log(posts);
  return (
    <>
      <Flex direction="column" gap={"large"}>
        <Button>Click me</Button>

        {posts.map((it) => (
          <Link href={`/${it.slug}`}>
            <Typography>{it.title}</Typography>
          </Link>
        ))}
      </Flex>
    </>
  );
}
