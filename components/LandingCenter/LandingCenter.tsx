import Image from "next/image";
import background from "../../assets/hero-bg.jpg";
import Button from "../Button/Button";

const LandingCenter = () => {
  return (
    <section className={`relative overflow-hidden text-center z-10 xl:!bg-cover xl:!bg-center xl:!bg-fixed xl:!bg-no-repeat`} >
      <div className={`w-full m-auto relative max-w-7xl py-48 lg:py-48 before:content-['']`}>
        <div className={`m-auto w-[80vw] max-w-md lg:max-w-xl flex items-start justify-center flex-wrap gap-x-5 border-box`}>
          <h1 className={`font-black text-center relative w-full !leading-[1.2em] text-4xl lg:text-6xl mb-8 lg:mb-10 text-white`}>
            Coventry&apos;s Leading Painters and Decorators
          </h1>
          <p className={`lg:text-xl !leading-8 text-center w-full mb-8 lg:mb-10 text-white`}>
            Expert painters and decorators offering a wide range of services for
            interiors, exteriors, and commercial spaces. Elevate your spaces
            with our unmatched precision.
          </p>
          <Button link="/contact" text="Get a Quote" classes="!py-4 !px-1 mb-4" />
          <Button link="/gallery" text="Gallery" bgColor="transparent" classes="border-[1px] !py-4 !px-1" />
        </div>
      </div>

      {/* Background Image */}
      <picture className={`w-full h-full block absolute top-0 left-0 -z-20 before:content-[''] before:w-full before:h-full before:bg-black before:opacity-60 before:absolute before:block before:top-0 before:left-0 before:z-10`}>
        {/* Actual background image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={background} priority={true} alt="Hero" loading="eager" fill style={{ objectFit: "cover" }} />
        </div>
      </picture>
    </section>
  );
};

export default LandingCenter;
