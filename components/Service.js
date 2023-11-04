import Link from 'next/link';
import React from 'react';
import styles from './Service.module.css';
import Title from './Title/Title';
import Topper from './Topper/Topper';
import Image from 'next/image';

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
          {/* <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab1-m.jpg"
          /> */}
          <Image
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src={props.images[1]}
            alt="painting and decorating work"
            width="334"
            height="380"
          />
        </picture>
        {/* Small Image */}
        <picture className={`${styles.picture} ${styles.pictureSmall}`}>
          <Image
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src={props.images[0]}
            alt="painting and decorating work"
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
