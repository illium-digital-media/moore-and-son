import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";

const Testimonials = () => {
  const testimonialsData = [
    {
      starsSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
      text: "Thank you Wayne, great job on refreshing the outside of our house, it looks lovely! Such a lovely guy an couldn't recommend him enough!",
      name: "Amanda Walker",
      job: "Homeowner",
    },
    {
      starsSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
      text: "Well what can I say about this young man that's just decorated my complete bungalow he's done a grand job, also he's very reasonable with his prices, I would highly recommend him, thank you Wayne",
      name: "Sheila Williams",
      job: "Homeowner",
    },
    {
      starsSrc:
        "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
      text: "Would like to say huge thank you to Moore and Son for decorating my living room today I love it, done to perfection. Highly recommend and a lovely guy too, thanks once again.",
      name: "Heather Gerrard",
      job: "Homeowner",
    },
  ];

  return (
    <section className={`p-section`}>
      <div className={`w-full max-w-xl m-auto flex flex-col items-start gap-12 lg:gap-16 md:max-w-7xl`}>
        <div className={`text-left w-full max-w-lg flex flex-col items-start`}>
          <Topper text="Our Reviews" />
          <Title title="What Our Clients Say" />
          <p>
            At Moore and Son, your satisfaction is our success. Dive into the
            experiences of our valued clients and discover why our craftsmanship
            stands out. Their stories underscore our commitment to excellence,
            one brushstroke at a time.{" "}
          </p>
        </div>
        <ul className={`w-full flex justify-center items-center flex-col gap-4 md:flex-row justify-between items-stretch flex-wrap xl:flex-nowrap`}>
          {testimonialsData.map((testimonial, index) => (
            <li className={`w-full max-w-2xl bg-gray-100 border-box flex justify-center items-start flex-col relative py-8 lg:py-12 px-4 lg:px-10 md:w-[48.5%] xl:w-[49.5%] md:last-of-type:w-full md:last-of-type:max-w-full md:last-of-type:items-center md:last-of-type:text-center xl:w-full xl:items-start xl:last-of-type:text-left xl:last-of-type:items-start`} key={index}>
              {/* Blue Quote */}
              <img
                className={`h-auto block mb-5 lg:mb-6 w-40 lg:w-48`}
                aria-hidden="true"
                src={testimonial.starsSrc}
                decoding="async"
                alt="quote icon"
                width="189"
                height="24"
              />
              <p className={`mb-10 lg:mb-16 text-gray-700 leading-[1.5em] max-sm:text-sm`}>{testimonial.text}</p>
              <div className={`mt-auto flex justify-start items-center gap-5`}>
                <span className={`lg:text-xl font-bold mb-2 block leading-[1.5em]`}>
                  {testimonial.name}
                  <span className={`text-sm lg:text-base font-normal leading-[1.2em] uppercase block text-gray-700`}>{testimonial.job}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
