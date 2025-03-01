import { themeColor, Typography } from "@kwangmins-blog/ui";
import SiteHeader from "../SiteHeader/site-header";
import { footer, footerContainer } from "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <SiteHeader />
      </div>
      <Typography
        css={{ color: themeColor.color.secondaryFontColor }}
        variant="smallest"
      >
        Copyright 2025. Kwangmin. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
