import React, { CSSProperties } from "react";
import { typography } from "./typography.css";
import { TTypographyVariant } from "./typogrpqhy.interface";

interface ITypographyProps {
  children: React.ReactNode;
  variant?: TTypographyVariant;
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
