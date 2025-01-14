import { paragraph } from "./paragrahph.css";

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className={paragraph}>{children}</p>;
};

export default Paragraph;
