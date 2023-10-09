import Link from "next/link";
import React from "react";
import styles from "./LandingAndServices.module.css";

const services = [
  {
    iconSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/brain.svg",
    title: "Commercial Painting",
    description:
      "No commercial job is too big or too small!",
  },
  {
    iconSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/users.svg",
    title: "Interior Painting",
    description:
      "Moore & Son provides interior painting services to homeowners and business owners located in the Coventry area.",
  },
  {
    iconSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/Layer.svg",
    title: "Exterior Painting",
    description:
      "It is very important to regularly maintain the exterior of your property by properly prepping and repainting around every 5-7 years.",
  },
];
const LandingAndServices: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>Welcome to Invetex</span>
          <h1 className={styles.title}>
            Expert Accountants and Tax Advisors for Your Business
          </h1>
          <p className={styles.text}>
            Highly qualified tax consultants with many years of experience in
            the field offer a full range of services to help you build a
            financial future.
          </p>
          <a href="" className={styles.buttonSolid}>
            Free Consultation
          </a>
        </div>
        <picture className={styles.picture}>
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/accountant15.png"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/accountant15.png"
          />
          <img
            aria-hidden="true"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/accountant15.png"
            alt="accountant"
            width="468"
            height="658"
          />
        </picture>
      </div>
      <div className={styles.container}>
        <ul className={styles.cardGroup}>
          {services.map((item, index) => (
            <li className={styles.item} key={index}>
              <Link href={""}>
                <div className={styles.link}>
                  <img
                    className={styles.icon}
                    src={item.iconSrc}
                    loading="lazy"
                    decoding="async"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  <h3 className={styles.h3}>{item.title}</h3>
                  <p className={styles.itemText}>{item.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img
        className={styles.floater}
        aria-hidden="true"
        decoding="async"
        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/arrow-3.svg"
        alt="graphic"
        width="956"
        height="708"
      />
      <picture className={styles.background}>
        <source
          media="(max-width: 1023px)"
          srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/buildings-t.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/buildings.jpg"
        />
        <img
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/buildings.jpg"
          alt="buildings"
          width="1280"
          height="568"
        />
      </picture>
    </section>
  );
};

export default LandingAndServices;
