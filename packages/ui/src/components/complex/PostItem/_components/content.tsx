import { themeColor } from "../../../../styles/global.css";
import Typography from "../../../base/Typography/typography";
import React, { type CSSProperties, type PropsWithChildren } from "react";

export interface IContentProps extends PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>> {
  css?: CSSProperties;
  className?: string;
  variant?: "large" | "medium" | "small" | "ellipsis" | "smallest";
}

const Content: React.FC<IContentProps> = ({
  children,
  css,
  variant = "smallest",
  className
}) => {
  return (
    <Typography
      css={{
        color: themeColor.color.secondaryFontColor,
        ...css
      }}
      variant={variant}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default Content;
