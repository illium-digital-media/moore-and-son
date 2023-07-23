import React, { useState } from "react";
import Image from "next/image";
import Quote from "../assets/quote.svg";

const dummyTestimonials = [
  {
    name: "John Doe",
    comment:
      "The painting service was excellent. They did a fantastic job with the exterior of my house.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    comment:
      "I'm extremely satisfied with their interior painting service. They are professional and efficient.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mike Johnson",
    comment:
      "The team did a great job with the commercial painting project. Highly recommended!",
    image: "https://via.placeholder.com/150",
  },
  // Add more dummy testimonials as needed
];


const Testimonials = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {dummyTestimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border border-gray-300 rounded-lg mb-4"
          style={{ margin: "0 4px" }} // Add margin here to create spacing
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
