"use client";

import React, { type PropsWithChildren, useRef } from "react";
import {
  badge,
  callout,
  code,
  hr,
  imageDescription,
  listStyle,
  orderedTitle,
  errorText,
  paragraph,
  strong,
} from "./mdx-content-components.css";
import Image from "next/image";
import { Flex } from "@kwangmins-blog/ui";
import CopyButton from "./copy-button";
import { getImageUrl, BLUR_DATA_URL } from "@kwangmins-blog/util";

const ErrorText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className={errorText}>{children}</span>;
};

const Hr: React.FC = () => {
  return <hr className={hr} />;
};

const Br: React.FC<{ lineCount: number }> = ({ lineCount = 1 }) => {
  return (
    <>
      {[...Array(lineCount)].map((_, i) => (
        <br key={i} />
      ))}
    </>
  );
};

const List: React.FC<PropsWithChildren> = ({ children }) => {
  return <li className={listStyle}>{children}</li>;
};

const OrderedTitle: React.FC<{
  title: string;
  tag?: keyof JSX.IntrinsicElements;
}> = ({ title, tag: Tag = "p" }) => {
  return (
    <Tag className={orderedTitle[Tag as keyof typeof orderedTitle]}>
      {title}
    </Tag>
  );
};

const Strong: React.FC<PropsWithChildren> = ({ children }) => {
  return <strong className={strong}>{children}</strong>;
};

const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={paragraph}>{children}</p>;
};

const Code: React.FC<PropsWithChildren> = ({ children }) => {
  return <code className={code}>{children}</code>;
};

// Custom components

const Callout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={callout}>{children}</div>;
};

const Badge: React.FC<{ text: string }> = ({ text }) => {
  return <div className={badge}>{text}</div>;
};

const PostImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  unoptimized?: boolean;
}> = ({ src, alt, width, height, description, unoptimized = false }) => {
  return (
    <Flex justify="center" direction="column" align="center" gap="small">
      <Image
        unoptimized={unoptimized}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        style={{
          borderRadius: "8px",
        }}
        src={getImageUrl(src)}
        alt={alt}
        width={width}
        height={height}
      />
      <p className={imageDescription}>{description}</p>
    </Flex>
  );
};

const Pre: React.FC<{ children: React.ReactNode; text: string }> = ({
  children,
  ...props
}) => {
  const preRef = useRef<HTMLPreElement>(null);

  return (
    <div className="code-block-wrapper">
      <CopyButton content={preRef.current?.textContent || ""} />
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
};

export {
  List,
  Pre,
  Hr,
  Strong,
  ErrorText,
  Paragraph,
  Badge,
  OrderedTitle,
  Code,
  Callout,
  Br,
  PostImage,
};
