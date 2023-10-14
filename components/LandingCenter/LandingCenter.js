import Link from "next/link";
import Image from "next/image";
import styles from "./LandingCenter.module.css";
import background from "../../assets/hero-bg.jpg";

const LandingCenter = () => {
  return (
    <section
      className={`relative overflow-hidden text-center ${styles.hero229}`}
    >
      <div className={`w-full m-auto relative ${styles.csContainer}`}>
        <div className={styles.csFlexGroup}>
          <h1 className={styles.csTitle}>
            Coventry&apos;s Premier Painters and Decorators
          </h1>
          <p className={styles.csText}>
            Expert painters and decorators offering a wide range of services for
            interiors, exteriors, and commercial spaces. Elevate your spaces
            with our unmatched precision.
          </p>
          <button className={styles.csButtonSolid}>
            <Link href="/contact">Get a Quote</Link>
          </button>
          <button className={styles.csButtonTransparent}>
            <Link href="/gallery">Gallery</Link>
          </button>
        </div>
      </div>

      {/* Background Image */}
      <picture
        className={`w-full h-full block absolute top-0 left-0 ${styles.csPicture}`}
      >
        <source media="(max-width: 600px)" srcSet={background.src} />
        <source media="(min-width: 601px)" srcSet={background.src} />
        <Image
          loading="lazy"
          decoding="async"
          src={background}
          alt="mountains"
          width={2250}
          height={1500}
          aria-hidden="true"
        />
      </picture>
    </section>
  );
};

export default LandingCenter;
