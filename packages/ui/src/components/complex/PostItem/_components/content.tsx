import Typography from "../../../base/Typography/Typography";
import React, { CSSProperties, PropsWithChildren } from "react";

export interface IContentProps {
  children: React.ReactNode;
  css?: CSSProperties;
  className?: string;
  variant?: "large" | "medium" | "small" | "ellipsis" | "smallest";
}

const Content: React.FC<IContentProps> = ({
  children,
  css,
  variant = "small",
  className,
}) => {
  return (
    <Typography css={css} variant={variant} className={className}>
      {children}
    </Typography>
  );
};

export default Content;
