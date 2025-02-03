import Link from "next/link";
import { IHeadingProps } from "@monorepo/ui/src/components/base/Heading/heading.interface.js";
import React, { PropsWithChildren } from "react";
import {Pre, 
  Badge,
  Br,
  Callout,
  Hr,
  List,
  OrderedTitle,
  Paragraph,
  PostImage,
  Strong
} from "./mdx-content-components";
import Image from "next/image";
import {
  h5Style,
  h4Style,
  h3Style,
  h1Style,
  h2Style,
  h6Style,
  olStyle,
  link
} from "./mdx-content-components.css";
import { ulStyle } from "./mdx-content-components.css";

type MDXHeadingProps = Omit<IHeadingProps, "level"> & {
  children: React.ReactNode;
};

const components = {
  PostImage,
  Image,
  Callout,
  Badge,
  OrderedTitle,
  pre: Pre,
  Hr,
  Br,
  
  // h1: (props: MDXHeadingProps) => <h1 className={h1Style} {...props} />,
  // h2: (props: MDXHeadingProps) => <h2 className={h2Style} {...props} />,
  // h3: (props: MDXHeadingProps) => <h3 className={h3Style} {...props} />,
  // h4: (props: MDXHeadingProps) => <h4 className={h4Style} {...props} />,
  // h5: (props: MDXHeadingProps) => <h5 className={h5Style} {...props} />,
  // h6: (props: MDXHeadingProps) => <h6 className={h6Style} {...props} />,
  a: (props: PropsWithChildren & { href: string }) => <a className={link} {...props} />,
  // p: (props: PropsWithChildren) => <Paragraph {...props} />,
  br: (props: PropsWithChildren) => <br {...props} />,
  hr: () => <Hr />,
  // ul: (props: PropsWithChildren) => <ul className={ulStyle} {...props} />,
  // ol: (props: PropsWithChildren) => <ol className={olStyle} {...props} />,
  // li: (props: PropsWithChildren) => <List {...props} />,
  // strong: (props: PropsWithChildren) => <Strong {...props} />
};

export default components;
