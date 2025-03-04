import { CSSProperties } from "react";

export type TTypographyVariant = 'large' | 'medium' | 'small' | 'ellipsis' | 'smallest';

export interface ITypographyProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>> {
  variant?: TTypographyVariant;
  css?: CSSProperties;
  className?: string;
}