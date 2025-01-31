import { APP_PATH } from "@/constant/appPath";
import { Typography } from "@monorepo/ui";
import Link from "next/link";


interface NavLinkProps {
  path: keyof typeof APP_PATH | "/";
  text: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ path, text, className }) => {
  return (
    <Link href={`/${path}`}>
      <Typography className={className} variant="medium">
        {text}
      </Typography>
    </Link>
  );
};

export default NavLink;
