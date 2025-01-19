import { CSSProperties } from "react";

export type THeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHeadingProps {
  level?: THeadingLevel;
  children: React.ReactNode;
  color?: string;
  className?: string;
  css?: CSSProperties;
}