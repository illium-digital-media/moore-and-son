import Link from 'next/link';
import React from 'react';
import styles from './Service.module.css';
import Title from './Title/Title';
import Topper from './Topper/Topper';

const Service = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <div className={styles.content}>
        <Topper text={props.topper} />
        <Title title={props.title} />
        <p className={styles.text}>
          {props.content}
        </p>
        
        <button className={styles.buttonSolid}>
          <Link href='/contact'>
            Get a Quote
          </Link>
        </button>
      </div>
      <div className={styles.imageGroup}>
        {/* Large Image */}
        <picture className={`${styles.picture} ${styles.pictureLarge}`}>
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab1-m.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab1.jpg"
          />
          <img
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab1.jpg"
            alt="lab"
            width="334"
            height="380"
          />
        </picture>
        {/* Small Image */}
        <picture className={`${styles.picture} ${styles.pictureSmall}`}>
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab2.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab2.jpg"
          />
          <img
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab2.jpg"
            alt="lab"
            width="183"
            height="158"
          />
        </picture>
      </div>
      </div>

    </section>
  );
};

export default Service;
