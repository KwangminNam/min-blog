import React from "react";
import { gnb } from "./gnb.css";
import Link from "next/link";

const GNB: React.FC = () => {
  return (
    <nav className={gnb}>
      <ul>
        <li>
          <Link href="/blog">Posts</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default GNB;
