import React, { CSSProperties } from "react";
import { typography } from "./typography.css";

interface ITypographyProps {
  children: React.ReactNode;
  variant?: "large" | "medium" | "small";
  css?: CSSProperties;
}

const Typography = ({ children, variant = "large", css }: ITypographyProps) => {
  return <span className={typography({ variant })} style={css}>{children}</span>;
};

export default Typography;