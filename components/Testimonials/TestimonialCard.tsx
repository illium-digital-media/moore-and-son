import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import Image, { StaticImageData } from "next/image";

export type TestimonialItem = {
  name: string;
  comment: string;
  image: StaticImageData;
};

export const TestimonialCard: React.FC<{ testimonial: TestimonialItem }> = ({
  testimonial,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`w-full sm:pb-2 mx-1 sm:w-1/2 md:w-1/4 border border-gray-300 rounded-lg mb-4 ${
        darkMode ? "bg-zinc-700" : "bg-white"
      }`}
    >
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        height={100}
        width={100}
        className="w-full h-40 rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
        <p className="">{testimonial.comment}</p>
      </div>
    </div>
  );
};
