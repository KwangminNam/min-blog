import Typography from "../../../base/Typography/Typography";
import React, { CSSProperties, PropsWithChildren } from "react";

export interface IContentProps {
  children: React.ReactNode;
  css?: CSSProperties;
}

const Content: React.FC<IContentProps> = ({ children, css }) => {
  return (
    <Typography css={css} variant="small">
      {children}
    </Typography>
  );
};

export default Content;
