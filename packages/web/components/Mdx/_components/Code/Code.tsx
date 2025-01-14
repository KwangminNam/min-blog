import { code } from "./code.css";

export const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <code className={code}>{children}</code>;
};
