import React, { useState } from "react";

// Sample image data (replace with your actual image data)
const imageData = [
  { id: 1, url: "https://altechpainting.com/wp-content/uploads/2019/01/3-1.png", category: "Exterior" },
  { id: 2, url: "https://altechpainting.com/wp-content/uploads/2019/01/5-1.png", category: "Interior" },
  { id: 3, url: "https://altechpainting.com/wp-content/uploads/2019/01/4-1.png", category: "Other" },

  // Add more image objects for other categories
];

// Sample service categories (replace with your actual categories)
const serviceCategories = ["All", "Exterior", "Interior", "Other"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter images based on the selected category
  const filteredImages =
    selectedCategory === "All"
      ? imageData
      : imageData.filter((image) => image.category === selectedCategory);

  // Handle category button clicks
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="max-w-screen-lg m-auto items-start max-lg:px-4 py-10">
      <div className="text-center">
        {serviceCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 mx-2 rounded ${
              category === selectedCategory
                ? "bg-primary text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap">
        {filteredImages.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.category}
            className="max-w-xs m-2"
            style={{ borderRadius: "8px" }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
