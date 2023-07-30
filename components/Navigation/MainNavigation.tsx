import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import Image from "next/image";
import LogoPlaceholder from "../../assets/logo-placeholder.png";
import DarkModeToggle from "./DarkModeToggle";
import PhoneIcon from "../Icons/Phone";

import { DarkModeContext } from "../DarkModeContext";
import React, { useContext } from "react";

const navItems = [
  { pageLink: "/", copy: "Home" },
  { pageLink: "/about", copy: "About" },
  { pageLink: "/services", copy: "Services" },
  { pageLink: "/gallery", copy: "Gallery" },
  { pageLink: "/contact", copy: "Contact" },
];

const MainNavigation: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <header
      className={`w-full max-lg:shadow-lg max-lg:fixed fixed shadow-lg z-10 ${
        darkMode ? "bg-zinc-800" : "bg-white"
      }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <nav className="flex justify-between m-auto max-w-screen-lg max-lg:px-4">
        <BurgerMenu />
        <div className="py-2">
          <Link href="/">
            <Image
              src={LogoPlaceholder}
              alt="Logo Placeholder"
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
            <div className="flex items-center">
              <div className="text-primary pr-1">
                <PhoneIcon />
              </div>
              <span className="text-lg text-primary font-bold">
                0123 456 789
              </span>
            </div>
          </a>
        </ul>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default MainNavigation;
