import React, { useState, useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import GraduationIcon from "../../components/Icons/Graduation";
import TickIcon from "../Icons/Tick";
import HourglassIcon from "../Icons/Hourglass";
import HeadsetIcon from "../Icons/Headset";
import PriceIcon from "../Icons/Price";
import RecycleIcon from "../Icons/Recycle";
import Image from "next/image";

const chooseUs = [
  {
    title: "Experienced Professionals",
    content:
      "Our team boasts years of hands-on experience, guaranteeing expert advice and superior workmanship for all your painting and decorating needs.",
    image: <GraduationIcon />,
  },
  {
    title: "Quality Assurance",
    content:
      "We prioritize quality in all our projects, using only top-grade materials and proven methods to ensure a stunning finish every time.",
    image: <TickIcon />,
  },
  {
    title: "Exceptional Customer Service",
    content:
      "We're committed to making your painting and decorating journey seamless and enjoyable, offering attentive, personalized service from start to finish.",
    image: <HeadsetIcon />,
  },
  {
    title: "Timely Delivery",
    content:
      "Your time is precious to us. We adhere strictly to project timelines, ensuring your space is transformed and ready when you need it.",
    image: <HourglassIcon />,
  },
  {
    title: "Competitive Pricing",
    content:
      "At Brushstrokes, we believe in providing exceptional services at fair prices. We offer competitive rates without compromising on the quality of our work.",
    image: <PriceIcon />,
  },
  {
    title: "Environmentally Conscious",
    content:
      "We take responsibility for our planet seriously. Our team uses eco-friendly materials and sustainable practices, keeping your spaces beautiful and our earth safe.",
    image: <RecycleIcon />,
  },
];

const WhyChooseUs: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="max-w-screen-lg m-auto max-lg:px-5">
      <h3 className="font-bold text-4xl pb-10 text-center">Why Choose Us</h3>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {chooseUs.map((item, index) => (
          <div
            key={index}
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
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
