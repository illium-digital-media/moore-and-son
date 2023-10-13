import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./AboutUs.module.css";
import Link from "next/link";
import Button from "../Button/Button";
import Image from "next/image";
import Van from "../../assets/van.jpg";

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <picture className={styles.picture}>
          <Image src={Van.src} alt="room" width="618" height="537" />
        </picture>
        <div className={styles.content}>
          <Topper text="What We Do" color="white" />
          <Title title="Painters and Decorators In Coventry" color="white" />
          <p className={styles.text}>
            Founded in Coventry over 50 years ago, Moore & Son is a testament to
            the transformative power of color and design. Our seasoned team
            excels in marrying traditional techniques with contemporary
            aesthetics, ensuring every wall we touch is a canvas echoing
            precision, passion, and innovation.
          </p>
          <p className={styles.text}>
            From homes to commercial spaces, our dedication to quality and
            detail remains unwavering. We believe in crafting narratives, not
            just painting walls. Discover the Moore & Son difference and let us
            redefine your spaces.
          </p>
          <Button link="/about" text="More" bgColor="white" textColor="black" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
