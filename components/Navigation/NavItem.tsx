import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: React.FC<{
  pageLink: string;
  handleClick?: () => void;
  copy: string;
}> = (props) => {
  const router = useRouter();
  const isActive = router.pathname === props.pageLink;
  return (
    <li
      className={`py-3 m-auto px-5 list-none text-base  duration-200 relative`}
    >
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
