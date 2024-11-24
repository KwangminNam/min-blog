import React from "react";

import Link from "next/link";
import { header } from "./header.css";
import GNB from "../GNB/gnb";

const Header: React.FC = () => {
  return (
    <header className={header}>
      <h1>
        <Link href="/">Kwangmin's Blog</Link>
      </h1>
      <GNB />
    </header>
  );
};

export default Header;
