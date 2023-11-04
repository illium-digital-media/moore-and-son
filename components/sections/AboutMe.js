import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./AboutMe.module.css";
import Van from "../../assets/owner.jpeg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <picture>
            <Image
              loading="lazy"
              decoding="async"
              src={Van}
              alt="room"
              width="494"
              height="700"
            />
          </picture>
        </div>
        <div className={styles.content}>
          <Topper text="About Me" />
          <Title title="Coventry's Go-To Painter" />

          <p className={styles.text}>
            Hello, I'm Wayne, the driving force behind Moore and Son. With over a decade in the industry, my hands-on experience ranges from intricate interior work to robust exterior finishes. My father handed down not just his brushes, but a legacy of diligence and quality that Moore and Son upholds with every stroke.
          </p>
          <p className={styles.text}>
            For me, painting is personal. You won't encounter salespeople or outsourced estimators here. I'm your first point of contact, ensuring a direct line of communication from the initial call through to the final brushstroke. At Moore and Son, we cut out the unnecessary to focus on what truly matters – exceptional painting services tailored to your needs.
          </p>
          <p className={styles.text}>
            My dedication is evident in the precision of our work and the pristine condition we leave behind. My promise to you is simple: we will strive to not only meet but exceed your expectations with every project. Ready to transform your space? Reach out directly or explore our gallery to see the difference passion makes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
