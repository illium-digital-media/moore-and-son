import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import Cabinet from "../Icons/Cabinet";
import Fence from "../Icons/Fence";
import House from "../Icons/House";
import Paintbrush from "../Icons/Paintbrush";
import Skyscraper from "../Icons/Skyscraper";
import Wallpaper from "../Icons/Wallpaper";

const servicesData = [
  {
    icon: <Paintbrush />,
    title: "Interior Painting",
    description:
      "Our professional painters ensure the right colors and finishes that best match your home or business.",
  },
  {
    icon: <House />,
    title: "Exterior Painting",
    description:
      "We provide durable and weather-resistant painting solutions, maintaining the beauty of your property's facade.",
  },
  {
    icon: <Skyscraper />,
    title: "Commercial Painting",
    description:
      "Specialized services tailored for businesses, ensuring a professional and appropriate aesthetic for every workspace.",
  },
  {
    icon: <Wallpaper />,
    title: "Wallpaper Installation",
    description:
      "Offering a range of wallpaper solutions, from classic patterns to modern designs, seamlessly applied.",
  },
  {
    icon: <Fence />,
    title: "Deck and Fence Staining",
    description:
      "Enhance and protect your outdoor wooden structures with our top-quality staining services.",
  },
  {
    icon: <Cabinet />,
    title: "Cabinet Refinishing",
    description:
      "Give your cabinets a refreshed look without the need for complete replacements, using our expert refinishing techniques.",
  },
];

const Services = () => {
  return (
    <section className={`p-section overflow-hidden relative z-10 before:content-[''] before:w-full before:h-screen before:max-h-96 before:bg-primary before:opacity-100 before:absolute before:block before:top-0 before:left-0 before:-z-10 md:before:hidden`}>
      <div className={`w-full max-w-[80em] m-auto flex flex-col items-center gap-12`}>
        <div className={`text-center w-full flex flex-col items-center md:text-left md:w-1/2 md:max-w-2xl md:mr-auto md:pb-0 md:border-box md:items-start md:relative md:pt-8 md:px-8 lg:pt-10 lg:px-10 md:before:content-[''] md:before:w-full md:before:bg-primary md:before:top-0 md:before:left-0 md:before:-z-10 md:before:absolute md:before:h-[250%]`}>
          <Topper text="What We Do" color="white" />
          <Title title="Painting and Decorating Services" color="white" />
        </div>
        <ul className={`w-full m-0 max-w-6xl bg-white flex border-box flex-col gap-5 p-9 md:p-16 lg:p-20 shadow-2xl sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-12 md:gap-y-16 md:w-9/10 md:ml-auto`}>
          {servicesData.map((service, index) => (
            <li key={index} className={`text-primary w-full text-left flex flex-col items-start gap-4 sm:w-5/12 lg:w-[31%]`}>
              {service.icon}
              <h3 className={`text-lg sm:text-xl lg:text-2xl leading-5 font-bold m-0 text-header`}>{service.title}</h3>
              <p className={`text-xs sm:text-base leading-6 m-0 text-gray-700`}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
