import React, { PropsWithChildren } from "react";
import {
  callout,
  code,
  hr,
  listStyle,
  orderedTitle,
  paragraph,
  strong
} from "./mdx-content-components.css";

const Hr: React.FC = () => {
  return <hr className={hr} />;
};

const Br: React.FC<{ lineCount: number }> = ({ lineCount = 1}) => {
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

export { List, Hr, Strong, Paragraph, OrderedTitle, Code, Callout, Br };
