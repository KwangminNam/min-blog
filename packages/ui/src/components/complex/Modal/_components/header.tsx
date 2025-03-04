import React, { PropsWithChildren } from "react";
import { modalHeader } from "../modal.css";
import Typography from "../../../base/Typography/typography";

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={modalHeader}>
      <Typography variant="small">{children}</Typography>
    </div>
  );
};

export default Header;
