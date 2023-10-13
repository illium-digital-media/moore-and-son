import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./Services.module.css";

const servicesData = [
    {
      iconSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/door.svg",
      title: "Exterior",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      iconSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/door.svg",
      title: "Interior",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      iconSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/door.svg",
      title: "Repainting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      iconSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/door.svg",
      title: "Custom Finishes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      iconSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/door.svg",
      title: "Color Consultation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      iconSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/door.svg",
      title: "Exterior Maintenance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];

  
const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Topper text="What We Do" color="white" />
          <Title title="House Painting Services" color="white" />
        </div>
        <ul className={styles.cardGroup}>
          {servicesData.map((service, index) => (
            <li key={index} className={styles.item}>
              <img
                className={styles.icon}
                src={service.iconSrc}
                alt="icon"
                width="61"
                height="58"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <h3 className={styles.h3}>{service.title}</h3>
              <p className={styles.itemText}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
