import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Phone from "../../assets/phone.svg";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { pageLink: "/", copy: "Home" },
  { pageLink: "/about", copy: "About" },
  { pageLink: "/services", copy: "Services" },
  { pageLink: "/gallery", copy: "Gallery" },
  { pageLink: "/contact", copy: "Contact" },
];

const MainNavigation: React.FC = () => {
  return (
    <header
      className={
        "w-full max-lg:shadow-lg max-lg:fixed fixed bg-white shadow-lg z-10"
      }
    >
      <nav className="flex justify-between m-auto max-w-screen-lg max-lg:px-4 max-lg:bg-white">
        <BurgerMenu />
        <div className="py-2">
          <Link href="/">
            <Image
              src={Logo}
              alt="Painting and decorating logo"
              className="w-24"
            />
          </Link>
        </div>
        <ul className="menu-list max-lg:hidden menu flex">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              pageLink={item.pageLink}
              copy={item.copy}
              handleClick={() => {}}
            />
          ))}
          <a href="tel:02031055111" className="flex ml-10 items-center">
            <Image src={Phone} alt="Phone" className="h-5 pr-1" />
            <span className="text-lg text-primary font-bold">
              0203 105 5111
            </span>
          </a>
        </ul>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default MainNavigation;
