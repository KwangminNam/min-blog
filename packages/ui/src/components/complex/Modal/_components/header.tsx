import React, { PropsWithChildren } from "react";
import { modalHeader } from "../modal.css";
import Typography from "../../../base/Typography/Typography";

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={modalHeader}>
      <Typography>{children}</Typography>
    </div>
  );
};

export default Header;
