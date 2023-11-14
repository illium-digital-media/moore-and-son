import React from "react";
import commercialBuilding from "../../assets/commercial1.jpeg";
import exteriorBuilding from "../../assets/exterior1.jpeg";
import interiorBuilding from "../../assets/interior1.jpeg";
import Link from "next/link";
import Topper from "../Topper/Topper";
import Title from "../Title/Title";
import Image from "next/image";

const ServicesPreview = () => {
  const services = [
    {
      title: "Commercial Painting",
      text: "Expertly managing both expansive and compact commercial painting projects with precision and ease.",
      imageSrc: commercialBuilding, // Replace with actual path to the image
      link: "/services/commercial",
    },
    {
      title: "Interior Painting",
      text: "Transforming interiors with a splash of color and a stroke of brilliance across Coventry and surrounding areas.",
      imageSrc: interiorBuilding, // Replace with actual path to the image
      link: "/services/interior",
    },
    {
      title: "Exterior Painting",
      text: "Protect and beautify your property's exterior with our durable and weather-resistant painting solutions.",
      imageSrc: exteriorBuilding, // Replace with actual path to the image
      link: "/services/exterior",
    },
  ];
  

  return (
    <section className={`p-section relative`}>
      <div className={`w-full max-w-xl m-auto flex flex-col justify-center items-center gap-12 lg:gap-16 lg:max-w-7xl`}>
        <div className={`w-full flex flex-col items-center text-center gap-4 md:flex-row md:justify-between md:text-left md:gap-10`}>
          <div className={``}>
            <Topper text="Our Services" />
            <Title title="Our Popular Services" />
          </div>
          <p className={`md:w-1/2`}>
            Discover the range of specialized painting and decorating solutions
            we offer, tailored to meet your every need.
          </p>
        </div>
        <ul className={`w-full m-0 p-0 grid grid-cols-12 gap-4 lg:gap-5`}>
          {services.map((service, index) => (
            <li className={`group w-full h-[18.75rem] lg:h-[23.75rem] border-box bg-black flex flex-col justify-end items-start relative text-left shadow-xl col-span-12 z-10 lg:col-span-4 lg:h-[30rem]`} key={index}>
              <Link href={service.link} className={`w-full h-full border-box p-5 lg:p-8 flex flex-col justify-end relative z-10 after:content-[''] after:w-full after:h-full after:opacity-0 after:absolute after:top-0 after:right-0 after:-z-10 after:duration-300`}>
                <h3 className={`text-xl lg:text-2xl leading-[1.2em] font-bold mb-1 text-white duration-300`}>{service.title}</h3>
                <p className={`max-sm:text-sm leading-[1.5em] text-white`}>{service.text}</p>
              </Link>
              <picture className={`w-full h-full overflow-hidden block absolute top-0 left-0 -z-10 before:content-[''] before:w-full before:h-full before:opacity-100 before:block before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-[rgba(26,26,26,0)] before:to-black bb after:content-[''] after:w-full after:h-full after:opacity-0 after:block after:absolute after:top-0 after:left-0 after:bg-gradient-to-b after:from-[#1a1a1a00] after:via-[#00000066] after:to-[#000000cc] after:duration-300 group-hover:after:opacity-100`}>
                <Image
                  decoding="async"
                  src={service.imageSrc.src}
                  alt="finance"
                  width="413"
                  height="374"
                  aria-hidden="true"
                  className="w-full h-full object-cover absolute top-0 left-0 -z-10 duration-700 group-hover:scale-125"
                />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesPreview;
