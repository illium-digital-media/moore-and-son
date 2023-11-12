import Link from "next/link";
import { useRouter } from "next/router";

const NavItems: React.FC<{
  pageLink: string;
  handleClick: () => void;
  copy: string;
}> = (props) => {
  const router = useRouter();
  const isActive = router.pathname === props.pageLink;
  return (
    <>
        <Link className={`${isActive ? 'lg:text-primaryLight max-md:font-bold' : 'lg:text-white max-lg:text-black'}  md:h-full md:flex items-center`} href={props.pageLink} onClick={props.handleClick}>
          <span className={`px-5 py-4 md:py-5 m-auto duration-200 max-md:flex md:justify-center`}>
            {props.copy}
          </span>
        </Link>


    </>

  );
};

export default NavItems;