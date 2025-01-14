import { Heading } from "@monorepo/ui";
import { IHeadingProps } from "@monorepo/ui/src/components/base/Heading/heading.interface.js";
import Image from "next/image";
import Link from "next/link";
import * as runtime from "react/jsx-runtime";
import { Code } from "./_components/Code/Code";
import Paragraph from "./_components/Paragraph/Paragraph";
import Hr from "./_components/Hr/Hr";

type MDXHeadingProps = Omit<IHeadingProps, "level"> & {
  children: React.ReactNode;
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  h1: (props: MDXHeadingProps) => <Heading level="h1" {...props} />,
  h2: (props: MDXHeadingProps) => <Heading level="h2" {...props} />,
  h3: (props: MDXHeadingProps) => <Heading level="h3" {...props} />,
  h4: (props: MDXHeadingProps) => <Heading level="h4" {...props} />,
  h5: (props: MDXHeadingProps) => <Heading level="h5" {...props} />,
  h6: (props: MDXHeadingProps) => <Heading level="h6" {...props} />,
  a: (props: any) => <Link {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  br: (props: any) => <br {...props} />,
  hr: () => <Hr />
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
