import React from "react";
import { gnb } from "./gnb.css";
import Link from "next/link";
import { APP_PATH } from "@/constant/appPath";
const GNB: React.FC = () => {
  return (
    <nav className={gnb}>
      <ul>
        <li>
          <Link href={`/${APP_PATH.blog}`}>Posts</Link>
        </li>
        <li>
          <Link href={`/${APP_PATH.resume}`}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default GNB;
