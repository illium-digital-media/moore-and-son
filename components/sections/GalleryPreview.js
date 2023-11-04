import React from "react";
import styles from "./GalleryPreview.module.css";
import Link from "next/link";
import Topper from "../Topper/Topper";
import Image from "next/image";
import interior1 from "../../assets/interior7.jpeg";
import exterior from "../../assets/exterior4.jpeg";
import commercial1 from "../../assets/commercial2.jpeg";
import interior2 from "../../assets/interior8.jpeg";
import exterior2 from "../../assets/exterior5.jpeg";

function GalleryPreview() {
  const imageList = [interior1, exterior, commercial1, interior2, exterior2];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Topper text="Our Portfolio" />
          <h2 className={styles.title}>Our Photo Gallery</h2>
        </div>
        <div className={styles.gallery}>
          {imageList.map((image, index) => (
            <picture key={index} className={styles.image}>
              <Image
                src={image.src}
                width="272"
                height="320"
                alt="gallery photo"
              />
            </picture>
          ))}
        </div>
        <button className={styles.buttonSolid}>
          <Link href="/gallery" className="block h-full w-full"><span>View More</span></Link>
        </button>
      </div>
    </section>
  );
}

export default GalleryPreview;
