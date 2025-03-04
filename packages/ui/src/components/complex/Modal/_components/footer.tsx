import React, { type PropsWithChildren } from "react";
import { modalFooter } from "../modal.css";

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={modalFooter}>{children}</div>;
};

export default Footer;
