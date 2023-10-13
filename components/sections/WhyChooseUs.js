import React from "react";
import Topper from "../Topper/Topper";
import styles from "./WhyChooseUs.module.css";
import Palette from "../Icons/Palette";
import ThumbsUp from "../Icons/ThumbsUp";
import PriceTag from "../Icons/PriceTag";

const items = [
  {
    icon: <Palette class={styles.icon}/>,
    title: "Skilled Artisans",
    description:
      "Our seasoned team has transformed countless spaces, ensuring every project is a unique masterpiece tailored to the client's vision.",
  },
  {
    icon: <PriceTag class={styles.icon} />,
    title: "Value-Packed Solutions",
    description:
      "Our services offer both quality and affordability, making top-tier painting and decorating accessible to all.",
  },
  {
    icon: <ThumbsUp class={styles.icon} />,
    title: "100% Satisfaction",
    description:
      "Our commitment to excellence ensures unmatched customer satisfaction, turning first-time clients into lifelong patrons.",
  },
];


const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.flex}>
            <Topper text="Why Choose Us" />
            <h2 className={styles.title}>
              Expert Painting & Decorating Service You Can Trust
            </h2>
          </div>
          <p className={styles.text}>
            At Moore & Son, we bring color and precision to your spaces,
            allowing you to focus on what you do best. We enhance the ambiance
            and aesthetic of businesses and homes alike.
          </p>
        </div>
        <ul className={styles.cardGroup}>
          {items.map((item, index) => (
            <li className={styles.item} key={index}>
              {item.icon}
              <h3 className={styles.h3}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
