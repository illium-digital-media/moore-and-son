import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./Services.module.css";
import Cabinet from "../Icons/Cabinet";
import Fence from "../Icons/Fence";
import House from "../Icons/House";
import Paintbrush from "../Icons/Paintbrush";
import Skyscraper from "../Icons/Skyscraper";
import Wallpaper from "../Icons/Wallpaper";

const servicesData = [
  {
    icon: <Paintbrush />,
    title: "Interior Painting",
    description:
      "Our professional painters ensure the right colors and finishes that best match your home or business.",
  },
  {
    icon: <House />,
    title: "Exterior Painting",
    description:
      "We provide durable and weather-resistant painting solutions, maintaining the beauty of your property's facade.",
  },
  {
    icon: <Skyscraper />,
    title: "Commercial Painting",
    description:
      "Specialized services tailored for businesses, ensuring a professional and appropriate aesthetic for every workspace.",
  },
  {
    icon: <Wallpaper />,
    title: "Wallpaper Installation",
    description:
      "Offering a range of wallpaper solutions, from classic patterns to modern designs, seamlessly applied.",
  },
  {
    icon: <Fence />,
    title: "Deck and Fence Staining",
    description:
      "Enhance and protect your outdoor wooden structures with our top-quality staining services.",
  },
  {
    icon: <Cabinet />,
    title: "Cabinet Refinishing",
    description:
      "Give your cabinets a refreshed look without the need for complete replacements, using our expert refinishing techniques.",
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
            <li key={index} className={`text-primary ${styles.item}`}>
              {service.icon}
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
