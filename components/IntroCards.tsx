import React, { useState } from "react";

const dummyTestimonials = [
  {
    name: "Residential",
    comment:
      "Transform homes with expert residential painting services, bringing your vision to life with flawless finishes.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Commercial",
    comment:
      "I'm extremely satisfied with their interior painting service. They are professional and efficient.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Exterior",
    comment:
      "The team did a great job with the commercial painting project. Highly recommended!",
    image: "https://via.placeholder.com/150",
  },
  // Add more dummy testimonials as needed
];


const IntroCards = () => {
  return (
    <div className="justify-between flex">
      {dummyTestimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 px-5 py-20 text-center  border border-gray-300 rounded-lg mb-4"
          style={{ margin: "0 4px" }} // Add margin here to create spacing
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mb-5 m-auto"
          />
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default IntroCards;
