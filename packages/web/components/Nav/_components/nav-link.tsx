import { APP_PATH } from "@/constant/appPath";
import { Typography } from "@kwangmins-blog/ui";
import Link from "next/link";


interface INavLinkProps {
  path: (typeof APP_PATH)[keyof typeof APP_PATH];
  text: string;
  className?: string;
}

const NavLink: React.FC<INavLinkProps> = ({ path, text, className }) => {
  return (
    <Link href={`/${path}`}>
      <Typography className={className} variant="medium">
        {text}
      </Typography>
    </Link>
  );
};

export default NavLink;
