import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      starsSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
      text: "Thank you Wayne, great job on refreshing the outside of our house, it looks lovely! Such a lovely guy an couldn't recommend him enough!",
      name: "Amanda Walker",
      job: "Homeowner",
    },
    {
      starsSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
      text: "Well what can I say about this young man that's just decorated my complete bungalow he's done a grand job, also he's very reasonable with his prices, I would highly recommend him, thank you Wayne",
      name: "Sheila Williams",
      job: "Homeowner",
    },
    {
      starsSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
      text: "Would like to say huge thank you to Moore and Son for decorating my living room today I love it, done to perfection. Highly recommend and a lovely guy too, thanks once again.",
      name: "Heather Gerrard",
      job: "Homeowner",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Topper text="Our Reviews" />
          <Title title="What Our Clients Say" />
          <p className={styles.text}>
            At Moore and Son, your satisfaction is our success. Dive into the
            experiences of our valued clients and discover why our craftsmanship
            stands out. Their stories underscore our commitment to excellence,
            one brushstroke at a time.{" "}
          </p>
        </div>
        <ul className={styles.cardGroup}>
          {testimonialsData.map((testimonial, index) => (
            <li className={styles.item} key={index}>
              {/* Blue Quote */}
              <img
                className={styles.stars}
                aria-hidden="true"
                src={testimonial.starsSrc}
                decoding="async"
                alt="quote icon"
                width="189"
                height="24"
              />
              <p className={styles.itemText}>{testimonial.text}</p>
              <div className={styles.flexGroup}>
                <span className={styles.name}>
                  {testimonial.name}
                  <span className={styles.job}>{testimonial.job}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
