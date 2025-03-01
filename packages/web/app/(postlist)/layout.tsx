import { Flex } from "@kwangmins-blog/ui";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex css={{ width: "100%" }}>
      {children}
    </Flex>
  );
}
