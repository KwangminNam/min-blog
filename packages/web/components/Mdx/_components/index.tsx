import React, { type PropsWithChildren } from "react";
import {Pre, 
  Badge,
  Br,
  Callout,
  Hr,
  OrderedTitle,
  PostImage,
  ErrorText
} from "./mdx-content-components";
import Image from "next/image";
import {
  link
} from "./mdx-content-components.css";

const components = {
  PostImage,
  Image,
  Callout,
  Badge,
  OrderedTitle,
  pre: Pre,
  Hr,
  Br,
  ErrorText,
  a: (props: PropsWithChildren & { href: string }) => <a className={link} {...props} />,
  br: (props: PropsWithChildren) => <br {...props} />,
  hr: () => <Hr />
};

export default components;
