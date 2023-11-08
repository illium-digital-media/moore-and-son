import React from "react";
import Link from "next/link";
import Topper from "../Topper/Topper";
import Image from "next/image";
import interior1 from "../../assets/interior7.jpeg";
import exterior from "../../assets/exterior4.jpeg";
import commercial1 from "../../assets/commercial2.jpeg";
import interior2 from "../../assets/interior8.jpeg";
import exterior2 from "../../assets/exterior5.jpeg";
import Button from "../Button/Button";
import Title from "../Title/Title";

function GalleryPreview() {
  const imageList = [interior1, exterior, commercial1, interior2, exterior2];

  return (
    <section className={`p-section`}>
      <div className={`w-full m-auto flex flex-col items-center gap-12 lg:gap-16 max-w-4xl xl:max-w-7xl`}>
        <div className={`text-center w-full flex flex-col items-center`}>
          <Topper text="Our Portfolio" />
          <Title title="Our Photo Gallery" />
        </div>
        <div className={`w-full max-w-lg grid grid-cols-12 gap-4 lg:gap-5 md:max-w-full md:grid-rows-1 xl:grid-cols-5`}>
          {imageList.map((image, index) => (
            <picture key={index} className={`min-h-[16rem] lg:min-h-[20rem] overflow-hidden block col-span-12 row-span-1 relative md:!col-span-4 md:[&:nth-child(4)]:!col-span-6 md:[&:nth-child(5)]:!col-span-6 xl:!col-span-1 xl:[&:nth-child(4)]:!col-span-1 xl:[&:nth-child(5)]:!col-span-1`}>
              <Image
                src={image.src}
                width="272"
                height="320"
                alt="gallery photo"
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </picture>
          ))}
        </div>
        <Button link="/gallery" text="View More" />
      </div>
    </section>
  );
}

export default GalleryPreview;
