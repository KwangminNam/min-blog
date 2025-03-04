
import { typography } from "./typography.css";
import type { ITypographyProps } from "./typogrpqhy.interface";

const Typography = ({ children, variant = "large", css, className }: ITypographyProps) => {
  return (
    <span className={`${typography({ variant })} ${className}`} style={css}>
      {children}
    </span>
  );
};

export default Typography;
