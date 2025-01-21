import React, { CSSProperties } from "react";
import { typography } from "./typography.css";

interface ITypographyProps {
  children: React.ReactNode;
  variant?: "large" | "medium" | "small" | "ellipsis" | "smallest";
  css?: CSSProperties;
  className?: string;
}

const Typography = ({ children, variant = "large", css, className }: ITypographyProps) => {
  return (
    <span className={`${typography({ variant })} ${className}`} style={css}>
      {children}
    </span>
  );
};

export default Typography;
