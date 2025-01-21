import Typography from "../../../base/Typography/Typography";
import React, { CSSProperties, PropsWithChildren } from "react";

export interface IContentProps {
  children: React.ReactNode;
  css?: CSSProperties;
  variant?: "large" | "medium" | "small" | "ellipsis" | "smallest";
}

const Content: React.FC<IContentProps> = ({ children, css, variant = "small" }) => {
  return (
    <Typography css={css} variant={variant}>
      {children}
    </Typography>
  );
};

export default Content;
