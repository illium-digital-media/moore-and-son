import React from "react";
import styles from "./ServicesPreview.module.css"; // Import the CSS module
import commercialBuilding from "../../assets/commercial-building.jpg";
import exteriorBuilding from "../../assets/home-exterior.jpg";
import interiorBuilding from "../../assets/painting-interior.jpg";
import Link from "next/link";
import Topper from "../Topper/Topper";
import Title from "../Title/Title";

const ServicesPreview = () => {

  const services = [
    {
      title: "Commercial Painting",
      text: "No commercial job is too big or too small!",
      imageSrc: commercialBuilding,
      link: '/services/commercial'
    },
    {
      title: "Interior Painting",
      text: "Altech provides interior painting services to homeowners and business owners located in the Phoenix valley area.",
      imageSrc: interiorBuilding,
      link: '/services/interior'
    },
    {
      title: "Exterior Painting",
      text: "It is very important to regularly maintain the exterior of your property by properly prepping and repainting around every 5-7 years.",
      imageSrc: exteriorBuilding,
      link: '/services/exterior'
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.flexGroup}>
            <Topper text="Our Services" />
            <Title title="Our Popular Services" />
          </div>
          <p className={styles.text}>
            In the new era of technology, we look into the future with certainty
            and for any post types, or just they are so much great of all to a program.
          </p>
        </div>
        <ul className={styles.cardGroup}>
          {services.map((service, index) => (
            <li className={styles.item} key={index}>
              <Link href={service.link} className={styles.link}>
                <h3 className={styles.h3}>{service.title}</h3>
                <p className={styles.itemText}>{service.text}</p>
              </Link>
              <picture className={styles.picture}>
                <img
                  decoding="async"
                  src={service.imageSrc.src}
                  alt="finance"
                  width="413"
                  height="374"
                  aria-hidden="true"
                />
              </picture>
 
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesPreview;
