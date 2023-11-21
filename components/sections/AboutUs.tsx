import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import Link from "next/link";
import Button from "../Button/Button";
import Image from "next/image";
import VanWEBP from "../../assets/van.webp";
import Van from "../../assets/van.jpeg";


const AboutUs = () => {
  return (
    <section className={`md:p-section md:m-section md:ml-0 md:mr-0 md:overflow-hidden`}>
      <div className={`max-lg:bg-primary w-full m-auto flex flex-col items-center lg:gap-16 max-w-[80rem] md:flex-row md:relative md:z-10 md:before:content-[''] md:before:w-screen md:before:ml-[-38%] md:before:bg-primary md:before:absolute md:before:left-1/2 md:before:-z-10 md:before:-bottom-36 md:before:-top-36`}>
        <picture className={`lg:before:opacity-60 block relative w-full h-80 md:w-[47vw] md:max-w-xl md:h-[33.5rem] md:relative md:before:content-[''] md:before:w-1/2 md:before:bg-primaryLight md:before:absolute before:top-[-1.5rem] md:before:top-[-2rem] before:left-[-1.5rem] before:bottom-[-1.5rem] md:before:bottom-[-2rem] md:mt-[1.5rem] md:mb-[1.5rem] md:ml-[1.5rem]`} >
          <Image src={Van} alt="van" width="618" height="537" className="absolute top-0 left-0 h-full w-full object-cover" />
        </picture>
        <div className={`text-left w-full max-w-lg pt-0 p-section border-box flex flex-col items-start md:w-1/2 md:p-0 my-6 mx-6 md:my-8 md:mx-8`}>
          <Topper text="What We Do" color="white" />
          <Title title="Painters and Decorators In Coventry" color="white" />
          <p className={`mb-4 text-gray-200`}>
            Founded in Coventry over 15 years ago, Moore & Son is a testament to
            the transformative power of color and design. Our seasoned team
            excels in marrying traditional techniques with contemporary
            aesthetics, ensuring every wall we touch is a canvas echoing
            precision, passion, and innovation.
          </p>
          <p className={`mb-8 text-gray-200`}>
            From homes to commercial spaces, our dedication to quality and
            detail remains unwavering. We believe in crafting narratives, not
            just painting walls. Discover the Moore & Son difference and let us
            redefine your spaces.
          </p>
          <Button link="/about" text="About Us" bgColor="white" textColor="black" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
