import React, { PropsWithChildren } from "react";
import { code, hr, paragraph } from "./mdx-content-components.css";

const Hr: React.FC = () => {
  return <hr className={hr} />;
};

const List: React.FC<PropsWithChildren> = ({ children }) => {
  return <li>{children}</li>;
};

const Strong: React.FC<PropsWithChildren> = ({ children }) => {
  return <strong>{children}</strong>;
};

const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={paragraph}>{children}</p>;
};

const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <code className={code}>{children}</code>;
};

export { List, Hr, Strong, Paragraph, Code };
