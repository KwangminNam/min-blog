import { Heading } from "@monorepo/ui";
import Link from "next/link";
import { IHeadingProps } from "@monorepo/ui/src/components/base/Heading/heading.interface.js";
import React, { PropsWithChildren } from "react";
import { Hr, List, Paragraph, Strong } from "./mdx-content-components";
import Image from "next/image";
import { olStyle } from "./mdx-content-components.css";
import { ulStyle } from "./mdx-content-components.css";

type MDXHeadingProps = Omit<IHeadingProps, "level"> & {
  children: React.ReactNode;
};

const components = {
  Image,
  h1: (props: MDXHeadingProps) => <Heading level="h1" {...props} />,
  h2: (props: MDXHeadingProps) => <Heading level="h2" {...props} />,
  h3: (props: MDXHeadingProps) => <Heading level="h3" {...props} />,
  h4: (props: MDXHeadingProps) => <Heading level="h4" {...props} />,
  h5: (props: MDXHeadingProps) => <Heading level="h5" {...props} />,
  h6: (props: MDXHeadingProps) => <Heading level="h6" {...props} />,
  a: (props: PropsWithChildren & { href: string }) => <Link {...props} />,
  p: (props: PropsWithChildren) => <Paragraph {...props} />,
  br: (props: PropsWithChildren) => <br {...props} />,
  hr: () => <Hr />,
  ul: (props: PropsWithChildren) => <ul className={ulStyle} {...props} />,
  ol: (props: PropsWithChildren) => <ol className={olStyle} {...props} />,
  li: (props: PropsWithChildren) => <List {...props} />,
  strong: (props: PropsWithChildren) => <Strong {...props} />,
}; 


export default components;
