import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { whyChooseUs } from "@/data/whychooseus";

const WhyChooseUs: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="max-w-screen-lg m-auto max-lg:px-5">
      <h3 className="font-bold text-4xl pb-10 text-center">Why Choose Us</h3>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {whyChooseUs.map((item, index) => (
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
