import SideBar from "@/components/SideBar/side-bar";
import { Flex } from "@monorepo/ui";

export default function PostLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <Flex css={{ width: "100%" }}>{children}</Flex>;
}
