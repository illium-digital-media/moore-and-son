import React from "react";
import styles from "./WhyChooseUs.module.css"; // Import the CSS module

const WhyChooseUs = () => {
  const cardData = [
    {
      iconSrc: "https://csimg.nyc3.digitaloceanspaces.com/SideBySide/person-blue.svg",
      title: "Skilled Artisans",
      text: "Our seasoned team has transformed countless spaces, ensuring every project is a unique masterpiece tailored to the client's vision.",
    },
    {
      iconSrc: "https://csimg.nyc3.digitaloceanspaces.com/SideBySide/hand-blue.svg",
      title: "Value-Packed Solutions",
      text: "Our services offer both quality and affordability, making top-tier painting and decorating accessible to all.",
    },
    {
      iconSrc: "https://csimg.nyc3.digitaloceanspaces.com/SideBySide/stars-thumbs.svg",
      title: "100% Satisfaction",
      text: "Our commitment to excellence ensures unmatched customer satisfaction, turning first-time clients into lifelong patrons.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.content}>
          <span className={styles.topper}>Who We Are</span>
          <h2 className={styles.title}>
            Expert Painting & Decorating Service You Can Trust
          </h2>
          <p className={styles.text}>
            At Moore & Son, we bring color and precision to your spaces,
            allowing you to focus on what you do best. We enhance the ambiance
            and aesthetic of businesses and homes alike.
          </p>
          {/* Image of cleaners */}
          <picture className={styles.picture}>
            <img
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaners.jpg"
              alt="cleaners"
              width="275"
              height="132"
            />
          </picture>
        </div>
        {/* Cards */}
        <ul className={styles.cardGroup}>
          {cardData.map((card, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.icon}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={card.iconSrc}
                  alt="icon"
                  width="48"
                  height="48"
                />
                {/* Create a span to make more bubbles with pseudo elements */}
                <span className={styles.bubble} aria-hidden="true"></span>
              </div>
              <div className={styles.flex}>
                <h3 className={styles.h3}>{card.title}</h3>
                <p className={styles.itemText}>{card.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
