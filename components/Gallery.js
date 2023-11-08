import React, { useState, useEffect } from "react";
import Image from "next/image";
import { galleryPhotos } from "@/data/gallery";
import Topper from "./Topper/Topper";
import Title from "./Title/Title";

const serviceCategories = ["All", "Exterior", "Interior"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fadeOut, setFadeOut] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Filter images based on the selected category
  const filteredImages =
    selectedCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((image) => image.category === selectedCategory);

  // Handle category button clicks
  const handleCategoryClick = (category) => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setFadeOut(false);
    }, 500); // Adjust the duration (in milliseconds) to match the CSS transition duration
  };

  useEffect(() => {
    // If images are already loaded (during client-side navigation), don't execute this logic again
    if (imagesLoaded) return;

    // Wait for all images to load
    const imageElements = document.querySelectorAll("img");
    const promises = Array.from(imageElements).map((img) => {
      return new Promise((resolve) => {
        if (img.complete) resolve();
        img.onload = () => resolve();
      });
    });

    Promise.all(promises).then(() => {
      setImagesLoaded(true);
    });
  }, [imagesLoaded]);

  return (
    <section className="max-w-screen-lg m-auto items-start max-lg:px-4 py-10">
      <div className={`pb-4 text-left w-full flex flex-col items-start md:flex-row md:justify-between md:items-end md:gap-16`}>
        <div className={'md:w-1/2'}>
          <Topper text="Gallery" />
          <Title title="Some of Our Best Work" />
        </div>
        <div className="text-center">
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 mx-2 mb-3 ${
                category === selectedCategory
                  ? " text-primary"
                  : " text-black hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full m-0 p-0 sm:grid grid-cols-12 gap-4 lg:gap-5">
        {filteredImages.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={image.category}
            height={100}
            style={{ height: '400px', width:'100%'}} // Set the height inline
            className={`w-full max-w-xs col-span-4 mb-3 transform scale-0 transition-all duration-500 ease-in-out hover:scale-200 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            onLoad={(e) => {
              const imgElement = e.target;
              imgElement.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
