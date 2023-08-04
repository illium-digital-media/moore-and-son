import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";
import livingRoomImage from "../assets/living-room.jpg";
import interiorImage from "../assets/interior-painting.jpg";
import exteriorImage from "../assets/exterior-painting.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    comment:
      "The painting service was excellent. They did a fantastic job with the exterior of my house.",
    image: livingRoomImage,
  },
  {
    name: "Jane Smith",
    comment:
      "I'm extremely satisfied with their interior painting service. They are professional and efficient.",
    image: interiorImage,
  },
  {
    name: "Mike Johnson",
    comment:
      "The team did a great job with the commercial painting project. Highly recommended!",
    image: exteriorImage,
  },
];

type Item = {
  name: string;
  comment: string;
  image: StaticImageData;
};

import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";

// Your card component
const Card: React.FC<{ testimonial: Item }> = ({ testimonial }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex flex-wrap ">
        <div
          className={`w-full sm:pb-2 mx-1 sm:w-1/2 md:w-1/4 border border-gray-300 rounded-lg mb-4 ${
            darkMode ? "bg-zinc-700" : "bg-white"
          }`}
          // Add margin here to create spacing
        >
          <div className="">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              height={100}
              width={100}
              className="w-full h-40 rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="">{testimonial.comment}</p>
          </div>
        </div>
    </div>
  );
};

// Your card slider component
const CardSlider: React.FC<{}> = ({}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "40px", 
// Default is true, but you can explicitly set it here.
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-x-clip flex flex-col h-full">
    <Slider {...settings} >
      {testimonials.map((item, index) => (
        <Card key={index} testimonial={item} />
      ))}
    </Slider>
    </div>

  );
};

export default CardSlider;