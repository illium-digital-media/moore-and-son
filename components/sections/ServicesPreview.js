import React from "react";
import styles from "./ServicesPreview.module.css"; // Import the CSS module
import commercialBuilding from "../../assets/commercial1.jpeg";
import exteriorBuilding from "../../assets/exterior1.jpeg";
import interiorBuilding from "../../assets/interior1.jpeg";
import Link from "next/link";
import Topper from "../Topper/Topper";
import Title from "../Title/Title";
import Image from "next/image";

const ServicesPreview = () => {
  const services = [
    {
      title: "Commercial Painting",
      text: "Expertly managing both expansive and compact commercial painting projects with precision and ease.",
      imageSrc: commercialBuilding, // Replace with actual path to the image
      link: "/services/commercial",
    },
    {
      title: "Interior Painting",
      text: "Transforming interiors with a splash of color and a stroke of brilliance across Coventry and surrounding areas.",
      imageSrc: interiorBuilding, // Replace with actual path to the image
      link: "/services/interior",
    },
    {
      title: "Exterior Painting",
      text: "Protect and beautify your property's exterior with our durable and weather-resistant painting solutions.",
      imageSrc: exteriorBuilding, // Replace with actual path to the image
      link: "/services/exterior",
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
            Discover the range of specialized painting and decorating solutions
            we offer, tailored to meet your every need.
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
                <Image
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
