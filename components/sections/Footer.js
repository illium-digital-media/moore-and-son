import React from "react";
import navigationItems from "../../data/navigation";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "../../assets/facebook-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import clockIcon from "../../assets/clock-icon.svg";
import Logo from "../../assets/logo.png";
import LogoIcon from "../Icons/Logo";


const Footer = () => {
  return (
    <footer className={`relative bg-zinc-900 p-section pb-8 md:pb-10 lg:pb-12`}>
      <div className={`w-full m-auto flex items-start flex-wrap max-w-xl flex justify-start gap-x-12 gap-y-8 md:max-w-screen-xl lg:items-start lg:justify-end lg:flex-nowrap`}>
        <div className={`w-full relative lg:w-1/3 lg:max-w-md lg:mr-auto`}>
          <Link aria-label="Go back to home" className={`w-32 my-6 h-auto block`} href="">
            <LogoIcon colour="white" />

          </Link>

          <div className={`inline-flex justify-start space-x-2 lg:flex-row lg:relative lg:top-auto lg:right-auto`}>
            <a
              className={`w-8 h-8 bg-gray-700 rounded-full flex justify-center items-center relative z-10 transition-transform transition-bg duration-300 ease-in-out hover:bg-primaryLight hover:-translate-y-1`}
              aria-label="Visit Facebook profile"
              href=""
            >
              <Image
                className={`h-3 w-auto block`}
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src={facebookIcon}
                alt="Facebook"
                width="11"
                height="11"
              />
            </a>
          </div>
        </div>
        <div>
          <span className={`text-lg font-semibold leading-6 mb-5 text-white block relative`}>Quick Links</span>
          <ul className={`flex flex-col gap-3`}>
            {navigationItems.map((link, index) => (
              <li key={index}>
                <Link className={`text-base no-underline leading-snug text-left text-gray-400 inline-flex items-start gap-2 transition-colors duration-300 hover:text-primaryLight`} href={link.link}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className={`text-lg font-semibold leading-6 mb-5 text-white block relative`}>Contact Information</span>
          <ul className={`flex flex-col gap-3`}>
            <li>
              <a className={`text-base no-underline leading-snug text-left text-gray-400 inline-flex items-start gap-2 transition-colors duration-300 hover:text-primaryLight`} href="" target="_blank">
                <Image
                  className={`w-5 h-auto mr-1 block`}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={clockIcon}
                  alt="Clock icon"
                  width="20"
                  height="20"
                />
                Everyday 7am – 7pm
              </a>
            </li>
            <li>
              <a className={`text-base no-underline leading-snug text-left text-gray-400 inline-flex items-start gap-2 transition-colors duration-300 hover:text-primaryLight`} href="tel:07961814490">
                <Image
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={phoneIcon}
                  alt="Phone icon"
                  width="20"
                  height="20"
                />
                07961 814490
              </a>
            </li>
            <li>
              <a
                className={`text-base no-underline leading-snug text-left text-gray-400 inline-flex items-start gap-2 transition-colors duration-300 hover:text-primaryLight`}
                href="mailto:mooreandson.decorators@yahoo.com"
              >
                <Image
                  className={`w-5 h-auto mr-1 block`}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={emailIcon}
                  alt="Email icon"
                  width="20"
                  height="20"
                />
                mooreandson.decorators@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`text-center w-full max-w-screen-xl mx-auto mt-12 mb-0 pt-6 border-t border-gray-700 flex flex-wrap justify-center gap-3 md:justify-between md:flex-nowrap`}>
        <span className={`text-base leading-snug no-underline mx-0 text-gray-400 inline-block relative transition-colors duration-300 w-full md:text-left`}>
          <div className="text-center">
            © Copyright 2023 | Built by:{" "}
            <a
              href="https://www.illiumdigitalmedia.com/"
              className={`text-white text-base leading-snug no-underline mx-0 text-gray-400 inline-block relative transition-colors duration-300 hover:text-primary`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-primary duration-300">Illium Digital Media</span>
            </a>
          </div>

        </span>
      </div>
    </footer>
  );
};

export default Footer;
