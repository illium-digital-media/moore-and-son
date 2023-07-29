import Image from "next/image";
import livingRoomImage from "../assets/living-room.jpg";
import interiorImage from "../assets/interior-painting.jpg";
import exteriorImage from "../assets/exterior-painting.jpg";
import { DarkModeContext } from "./DarkModeContext";
import React, { useContext } from "react";

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

const Testimonials = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-lg mb-4 ${
            darkMode ? "bg-zinc-700" : "bg-white"
          }`}
          style={{ margin: "0 4px" }} // Add margin here to create spacing
        >
          <div className=" h-1/2">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              height={100}
              width={100}
              className="w-full h-40"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="">{testimonial.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
