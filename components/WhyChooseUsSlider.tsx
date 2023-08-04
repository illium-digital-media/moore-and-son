import React, { ReactNode, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { whyChooseUs } from "@/data/whychooseus";
import Slider from "react-slick";

type Item = {
  title: string;
  content: string;
  image: ReactNode;
};

// Your card component
const Card: React.FC<{ item: Item }> = ({ item }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex flex-wrap ">
          <div
            className={`sm:mx-1 px-5 py-10 max-sm:py-10 max-sm:mb-3 text-center border border-gray-300 rounded-lg mb-4 shadow-lg flex  ${
              darkMode ? "bg-zinc-700" : "bg-white"
            }`}
          >
            <div className="w-full">
              <div className="p-3 shadow-lg rounded-full inline-block overflow-hidden mb-5 bg-white text-primary">
                {item.image}
              </div>
              <h3 className="text-2xl font-semibold pb-2">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
    </div>
  );
};

// Your card slider component
const WhyChooseUsSlider: React.FC<{}> = ({}) => {
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
      {whyChooseUs.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Slider>
    </div>

  );
};

export default WhyChooseUsSlider;