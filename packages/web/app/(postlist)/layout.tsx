import SideBar from "@/components/SideBar/side-bar";
import { Flex } from "@monorepo/ui";

export default function PostLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex gap="medium" justify="between" css={{ height: "1200px" }}>
      <Flex css={{ width: "70%" }}>
        {children}
      </Flex>
      <SideBar />
    </Flex>
  );
}
