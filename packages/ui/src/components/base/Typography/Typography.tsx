import React from "react";
import { typography } from "./typography.css";

interface ITypographyProps {
  children: React.ReactNode;
  variant?: "large" | "medium" | "small";
}

const Typography = ({ children, variant = "large" }: ITypographyProps) => {
  return <span className={typography({ variant })}>{children}</span>;
};

export default Typography;