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
    <section className="max-w-7xl m-auto flex flex-col items-center max-lg:px-4 py-10 gap-[clamp(1rem,6vw,2rem)]">
      <div className={`text-left w-full flex flex-col items-center md:items-start  md:flex-row md:justify-between md:items-end md:gap-16`}>
        <div className={'md:w-1/2'}>
          <Topper text="Gallery" classes="text-center md:text-left" />
          <Title title="Some of Our Best Work" />
        </div>
        <div className="text-center">
          {serviceCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 mx-2 mb-3 ${category === selectedCategory
                ? " text-primary"
                : " text-black hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <ul className="w-full flex flex-col items-center gap-[clamp(1rem,1.5vw,1.25rem)] sm:grid sm:grid-cols-12 sm:grid-rows-1">
        {filteredImages.map((image, index) => (
          <li className="w-full h-full aspect-square relative block sm:col-span-6 md:col-span-3" key={index}>
            <picture className="m-auto w-full h-full block relative">
              <Image
                src={image.url}
                alt={image.category}
                height={100}
                className={`absolute top-0 left-0 h-full w-full object-cover transform scale-0 transition-all duration-500 ease-in-out hover:scale-200 ${fadeOut ? "opacity-0" : "opacity-100"
                  }`}
                onLoad={(e) => {
                  const imgElement = e.target;
                  imgElement.style.transform = "scale(1)";
                }}
              />
            </picture>
          </li>

        ))}
      </ul>
    </section>
  );
};

export default Gallery;
