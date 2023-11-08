import React from "react";
import Topper from "../Topper/Topper";
import Palette from "../Icons/Palette";
import ThumbsUp from "../Icons/ThumbsUp";
import PriceTag from "../Icons/PriceTag";
import Title from "../Title/Title";

const iconStyle = 'w-auto mb-6 block h-12 duration-300 group-hover:grayscale group-hover:brightness-200 group-hover:text-white';

const items = [
  {
    icon: <Palette class={iconStyle}/>,
    title: "Skilled Artisans",
    description:
      "Our seasoned team has transformed countless spaces, ensuring every project is a unique masterpiece tailored to the client's vision.",
  },
  {
    icon: <PriceTag class={iconStyle} />,
    title: "Value-Packed Solutions",
    description:
      "Our services offer both quality and affordability, making top-tier painting and decorating accessible to all.",
  },
  {
    icon: <ThumbsUp class={iconStyle} />,
    title: "100% Satisfaction",
    description:
      "Our commitment to excellence ensures unmatched customer satisfaction, turning first-time clients into lifelong patrons.",
  },
];


const WhyChooseUs = () => {
  return (
    <section className={`p-section text-center`}>
      <div className={`w-full max-w-xl m-auto flex flex-col items-center gap-12 md:gap-16 lg:gap-20 md:max-w-7xl`}>
        <div className={`text-left w-full flex flex-col items-start md:flex-row md:justify-between md:items-end md:gap-16`}>
          <div className={`md:w-1/2`}>
            <Topper text="Why Choose Us" />
            <Title title='Expert Painting & Decorating Service You Can Trust' color="black" />
          </div>
          <p className={`max-w-lg`}>
            At Moore & Son, we bring color and precision to your spaces,
            allowing you to focus on what you do best. We enhance the ambiance
            and aesthetic of businesses and homes alike.
          </p>
        </div>
        <ul className={`w-full flex justify-center items-center flex-col gap-4 md:justify-between md:items-stretch md:flex-row md:gap-4 lg:gap-5`}>
          {items.map((item, index) => (
            <li className={`group text-left w-full p-8 bg-gray-100 rounded-xl duration-300 border-box hover:bg-primary cursor-pointer md:w-auto p-8 sm:p-[2rem] md:p-[calc(1rem+2.1vw)] lg:p-[2rem]`} key={index}>
              {item.icon}
              <h3 className={`mb-4 duration-300 group-hover:text-white !leading-8 text-xl lg:text-2xl`}>{item.title}</h3>
              <p className={`group-hover:text-white text-gray-700 !leading-6 duration-300`}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
