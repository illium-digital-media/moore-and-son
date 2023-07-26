
import React from "react";
import Link from "next/link";

type LinkType = {
  href: string;
  text: string;
};

type FooterLinkSectionProps = {
  title: string;
  links: LinkType[];
};

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, links }) => (
  <div className="flex-grow flex items-center justify-center">
    <div className="max-lg:pb-5">
      <h6 className="font-bold pb-2">{title}</h6>
      {links.map((link, index) => (
        <p key={index} className="pb-2">
          <Link href={link.href}>{link.text}</Link>
        </p>
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => {
  const linkSections = [
    {
      title: "Company",
      links: [
        { href: "/", text: "Home" },
        { href: "/about", text: "About Us" },
        { href: "/contact", text: "Contact Us" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/residential", text: "Residential Decorating" },
        { href: "/commercial", text: "Commercial Decorating" },
        { href: "/exterior", text: "Exterior Decorating" },
      ],
    },
    {
      title: "Social",
      links: [
        { href: "/", text: "Facebook" },
        { href: "/", text: "Instagram" },
        { href: "/", text: "Pinterest" },
        { href: "/", text: "YouTube" },
        { href: "/", text: "TikTok" },
      ],
    },
    {
      title: "Contact",
      links: [
        { href: "/", text: "Email: exampleemail@gmail.com" },
        { href: "/", text: "Phone: 0123 456 789" },
      ],
    },
    // Add more sections as needed...
  ];

  return (
    <footer className="text-white bg-gray-800">
      <div className="max-w-screen-lg m-auto ">
          <div className="flex max-lg:block max-lg:text-center items-start py-10">
            {linkSections.map((section, index) => (
              <FooterLinkSection key={index} title={section.title} links={section.links} />
            ))}
          </div>
        <div className=" bg-gray-800 text-center">
          <hr />
          <div className="p-2">
            <p className="text-sm">&copy; 2023 Your Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
