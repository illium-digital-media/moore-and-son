import React from "react";
import styles from "./GalleryPreview.module.css";
import Link from "next/link";
import Topper from "../Topper/Topper";
import Image from "next/image";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";

function GalleryPreview() {
  const imageList = [photo1, photo2, photo3, photo4, photo5];

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
