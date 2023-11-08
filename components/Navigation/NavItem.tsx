import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: React.FC<{
  pageLink: string;
  handleClick: () => void;
  copy: string;
}> = (props) => {
  const router = useRouter();
  const isActive = router.pathname === props.pageLink;
  return (
    <li
      className={`p-3 m-auto uppercase text-base font-bold ${
        isActive ? "text-primary" : " hover:text-primary"
      } duration-200 relative`}
    >
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
