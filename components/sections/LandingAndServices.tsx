import Link from "next/link";
import React from "react";
import styles from "./LandingAndServices.module.css";

const services = [
  {
    iconSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/brain.svg",
    title: "Commercial Painting",
    description:
      "Tackling every commercial project with precision, regardless of scale. Your business, our canvas.",
    link: "/commercial",
  },
  {
    iconSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/users.svg",
    title: "Interior Painting",
    description:
      "Elevate your interiors with Moore & Son's meticulous touch. Serving both homeowners and businesses in the Coventry area.",
    link: "/interior",
  },
  {
    iconSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/Layer.svg",
    title: "Exterior Painting",
    description:
      "Shield and beautify your property's exterior. Recommended upkeep every 5-7 years for lasting brilliance.",
    link: "/exterior",
  },
];

const LandingAndServices: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Moore & Son Painting and Decorating</h1>
          <p className={styles.text}>
            Highly skilled painters and decorators with extensive experience in
            the industry, we offer a comprehensive suite of services for
            interiors, exteriors, and commercial spaces. Trust us to redefine
            and elevate your spaces with impeccable finesse.
          </p>
          <a href="/contact" className={styles.buttonSolid}>
            Get A Quote
          </a>
        </div>

      </div>
      <div className={styles.container}>
        <ul className={styles.cardGroup}>
          {services.map((item, index) => (
            <li className={styles.item} key={index}>
              <Link href={item.link}>
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
