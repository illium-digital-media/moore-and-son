import React from "react";
import styles from "./GalleryPreview.module.css";
import Link from "next/link";

function GalleryPreview() {
  const imageList = [
    "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char1.jpg",
    "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char2.jpg",
    "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char3.jpg",
    "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char4.jpg",
    "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char5.jpg",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>Our Portfolio</span>
          <h2 className={styles.title}>Our Photo Gallery</h2>
        </div>
        <div className={styles.gallery}>
          {imageList.map((imageUrl, index) => (
            <picture key={index} className={styles.image}>
              <source media="(max-width: 600px)" srcSet={imageUrl} />
              <source media="(min-width: 601px)" srcSet={imageUrl} />
              <img
                loading="lazy"
                decoding="async"
                src={imageUrl}
                alt="gallery"
                width="272"
                height="320"
              />
            </picture>
          ))}
        </div>
        <button className={styles.buttonSolid}>
            <Link href="/gallery">View More</Link>
          </button>
      </div>
    </section>
  );
}

export default GalleryPreview;
