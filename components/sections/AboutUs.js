// AboutUs.jsx
import Link from "next/link";
import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <picture className={styles.picture}>
          {/* Mobile Image */}
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"
          />
          {/* Tablet and above Image */}
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"
          />
          <img
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"
            alt="room"
            width="494"
            height="700"
          />
        </picture>
        <div className={styles.content}>
          <span className={styles.topper}>What We Do</span>
          <h2 className={styles.title}>Painters and Decorators In Coventry</h2>
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
          <button className={styles.buttonSolid}>
            <Link href="/contact">Get Free Quote</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
