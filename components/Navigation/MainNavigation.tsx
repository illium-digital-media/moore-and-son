import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import Header from "./Header";
import ModalForm from "../ModalForm";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Light from "../../assets/light.svg";

const navItems = [
  { pageLink: "/", copy: "Home" },
  { pageLink: "/about", copy: "About" },
  { pageLink: "/services", copy: "Services" },
  { pageLink: "/gallery", copy: "Commercial" },
  { pageLink: "/contact", copy: "Contact" },
];

const MainNavigation: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };

  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full max-lg:shadow-lg max-lg:fixed ${
        navbarVisible ? "fixed shadow-lg bg-white" : "absolute bg-transparent "
      }`}
    >
      <Header />
      <nav className="flex justify-between m-auto max-w-screen-lg max-lg:px-4 max-lg:bg-white">
        <BurgerMenu />
        <ul className="menu-list max-lg:hidden menu flex w-full">
          <div className="py-2">
            <Link href="/">
              <Image
                src={Logo}
                alt="Painting and decorating logo"
                className="w-24"
              />
            </Link>
          </div>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              pageLink={item.pageLink}
              copy={item.copy}
              handleClick={() => {}}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
