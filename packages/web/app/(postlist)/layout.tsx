import SideBar from "@/components/SideBar/side-bar";
import { Flex } from "@monorepo/ui";

export default function PostLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex gap="medium" justify="between">
      <Flex css={{ width: "75%" }}>
        {children}
      </Flex>
      <SideBar />
    </Flex>
  );
}
