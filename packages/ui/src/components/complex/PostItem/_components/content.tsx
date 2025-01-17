import Typography from "../../../base/Typography/Typography";
import React, { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <Typography variant="small">{children}</Typography>;
};

export default Content;
