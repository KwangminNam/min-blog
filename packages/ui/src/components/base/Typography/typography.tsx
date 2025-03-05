import React from "react";
import { typography } from "./typography.css";
import type { ITypographyProps } from "./typography.interface";

const Typography: React.FC<ITypographyProps> = ({ 
  children, 
  variant = "large", 
  css, 
  className 
}) => {
  return (
    <span className={`${typography({ variant })} ${className}`} style={css}>
      {children}
    </span>
  );
};

export default Typography;