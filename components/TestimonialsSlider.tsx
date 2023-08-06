// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import React, { useState, useContext, useEffect } from "react";
// import { DarkModeContext } from "./DarkModeContext";
// import livingRoomImage from "../assets/living-room.jpg";
// import interiorImage from "../assets/interior-painting.jpg";
// import exteriorImage from "../assets/exterior-painting.jpg";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// // ... your other imports here ...

// const testimonials = [
//     {
//       name: "John Doe",
//       comment:
//         "The painting service was excellent. They did a fantastic job with the exterior of my house.",
//       image: livingRoomImage,
//     },
//     {
//       name: "Jane Smith",
//       comment:
//         "I'm extremely satisfied with their interior painting service. They are professional and efficient.",
//       image: interiorImage,
//     },
//     {
//       name: "Mike Johnson",
//       comment:
//         "The team did a great job with the commercial painting project. Highly recommended!",
//       image: exteriorImage,
//     },
//   ];
  
  
//   const Testimonials = () => {
//     const { darkMode, setDarkMode } = useContext(DarkModeContext);
  
//     const settings = {
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       centerMode: true,
//       centerPadding: '60px',
//       swipeToSlide: true,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             centerMode: false,
//           }
//         },
//       ]
//     };
  
//     return (
//       <div className="max-w-screen-sm m-auto">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`border border-gray-300 rounded-lg mb-4 ${
//                 darkMode ? "bg-zinc-700" : "bg-white"
//               }`}
//               style={{ padding: "16px" }} // Add padding here to create spacing
//             >
//               <div className="h-1/2">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   height={100}
//                   width={100}
//                   className="w-full h-40"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//                 <p className="">{testimonial.comment}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   };
  
//   export default Testimonials;
  
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface CarouselDataItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface CarouselProps {
  data: CarouselDataItem[];
}
const data = [
    {
      title: 'Home',
      description: 'This is the home description.',
    },
    {
      title: 'User',
      description: 'This is the user description.',
      
    },
    {
      title: 'Code',
      description: 'This is the code description.',
    },
  ];
const Carousel: React.FC<CarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setActiveIndex(current)
  };

  return (
    <div className="relative flex flex-col">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          >
      
            <h2 className="mb-2 font-semibold text-lg text-center">
              {item.title}
            </h2>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
