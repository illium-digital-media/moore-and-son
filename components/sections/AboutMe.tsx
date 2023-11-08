import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import Van from "../../assets/owner.jpeg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className={`md:p-section`}>
      <div className={`w-full max-w-7xl m-auto flex flex-col items-center gap-12 lg:gap-16 md:flex-row md:justify-end md:gap-15 lg:gap-[8rem]`}>
        <picture className={`block relative w-full h-72 md:w-[47vw] md:max-w-lg md:h-[32rem] lg:h-[43rem] md:mb-4 lg:mb-7 md:ml-4 lg:ml-7 relative order-2 md:before:content-[''] md:before:w-1/2 md:before:h-[60%] md:before:bg-primaryLight md:before:opacity-100 md:before:block md:before:absolute md:before:bottom-[-1rem] lg:before:bottom-[-1.75rem] md:before:right-[-1rem] lg:before:right-[-1.75rem]`}>
          <Image
            loading="lazy"
            decoding="async"
            src={Van}
            alt="room"
            width="494"
            height="700"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
        </picture>
        <div className={`text-left w-full max-w-lg p-section pt-0 border-box flex flex-col items-start md:w-1/2 md:p-0`}>
          <Topper text="About Me" />
          <Title title="Coventry's Go-To Painter" />
          <p className={`mb-4`}>
            Hello, I&apos;m Wayne, the driving force behind Moore and Son. With over a decade in the industry, my hands-on experience ranges from intricate interior work to robust exterior finishes. My father handed down not just his brushes, but a legacy of diligence and quality that Moore and Son upholds with every stroke.
          </p>
          <p className={`mb-4`}>
            For me, painting is personal. You won&apos;t encounter salespeople or outsourced estimators here. I&apos;m your first point of contact, ensuring a direct line of communication from the initial call through to the final brushstroke. At Moore and Son, we cut out the unnecessary to focus on what truly matters – exceptional painting services tailored to your needs.
          </p>
          <p className={'mb-4'}>
            My dedication is evident in the precision of our work and the pristine condition we leave behind. My promise to you is simple: we will strive to not only meet but exceed your expectations with every project. Ready to transform your space? Reach out directly or explore our gallery to see the difference passion makes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
