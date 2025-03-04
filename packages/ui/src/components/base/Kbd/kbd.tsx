import React from "react";
import { kbd } from "./kbd.css";

interface IKbd {
  children: React.ReactNode;
}

const Kbd: React.FC<IKbd> = ({ children }) => {
  return <kbd className={kbd}>{children}</kbd>;
};

export default Kbd;
