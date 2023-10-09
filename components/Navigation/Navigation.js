import Link from "next/link";
import React from "react";
import styles from "./Navigation.module.css";
import { useEffect } from "react";

const Navigation = () => {
  const navigationItems = [
    { text: "Home", link: "/contact" },
    { text: "About", link: "/about" },
    { text: "Gallery", link: "/gallery" },
    { text: "Services", link: "/services" },
    { text: "Contact", link: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      iconSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-dark.svg",
    },
  ];

  useEffect(() => {
    // Add your JavaScript code here

    // add classes for mobile navigation toggling
    const CSbody = document.querySelector("body");
    const navbarMenu = document.querySelector(".navigation");
    const burgerMenu = document.querySelector(".toggle");

    burgerMenu.addEventListener("click", function () {
      burgerMenu.classList.toggle(".active");
      navbarMenu.classList.toggle(".active");
      CSbody.classList.toggle("open");
      // run the function to check the aria-expanded value
      ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
    function ariaExpanded() {
      const csUL = document.querySelector(".expanded");
      const csExpanded = csUL?.getAttribute(".ariaExpanded");

      if (csExpanded === "false") {
        csUL?.setAttribute("ariaExpanded", "true");
      } else {
        csUL?.setAttribute("ariaExpanded", "false");
      }
    }

    // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll
    // animations with the navbar

    document.addEventListener("scroll", () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll >= 100) {
        document.querySelector("body")?.classList.add("scroll");
      } else {
        document.querySelector("body")?.classList.remove("scroll");
      }
    });

    // mobile nav toggle code
    const dropDowns = Array.from(
      document.querySelectorAll(".dropdown")
    );

    for (const item of dropDowns) {
      const onClick = () => {
        item.classList.toggle("active");
      };
      item.addEventListener("click", onClick);
    }
  }, []); 

  return (
    <header className={`navigation ${styles.navigation}`}>
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <ul className={styles.topSocial}>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.socialLink}>
                  <img
                    className={styles.socialIcon}
                    src={link.iconSrc}
                    alt={link.name}
                    width="12"
                    height="12"
                    aria-hidden="true"
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.topContact}>
            <a href="tel:07961814490" className={styles.topLink}>
              <img
                className={styles.linkIcon}
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/charity-phone-green.svg"
                alt="logo"
                width="16"
                height="16"
                aria-hidden="true"
                decoding="async"
              />
              07961 814490
            </a>
            <div className={` ${styles.topLink}`}>
              <img
                className={styles.linkIcon}
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/charity-clock-green.svg"
                alt="logo"
                width="20"
                height="20"
                aria-hidden="true"
                decoding="async"
              />
              M-F: 7:00am - 3:00pm
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <a href="#" className={styles.logo} aria-label="back to home">
          <img
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Logos/stitch-charity.svg"
            alt="logo"
            width="197"
            height="43"
            aria-hidden="true"
            decoding="async"
          />
        </a>
        <nav className={styles.nav} role="navigation">
          <button className={`toggle ${styles.toggle}`} aria-label="mobile menu toggle">
            <div className={styles.box} aria-hidden="true">
              <span className={`${styles.line1} ${styles.line}`} aria-hidden="true"></span>
              <span className={`${styles.line2} ${styles.line}`} aria-hidden="true"></span>
              <span className={`${styles.line3} ${styles.line}`} aria-hidden="true"></span>
            </div>
          </button>
          <div className={styles.ulWrapper}>
            <ul
              id={styles.expanded}
              className={styles.ul}
              aria-expanded="false"
            >
              {navigationItems.map((item, index) => (
                <li className={styles.li} key={index}>
                  <Link href={item.link}>
                    <span className={`hover:text-red-100 ${styles.liLink}`}>
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <a href="#" className={`${styles.buttonSolid} ${styles.navButton}`}>
          Donate Now
        </a>
      </div>
    </header>
  );
};

export default Navigation;
