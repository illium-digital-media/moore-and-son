import Image from 'next/image';
import heroBgWEBP from '../../assets/hero-bg.webp';
import heroBg from '../../assets/hero-bg.jpg';

const CommonLanding: React.FC<{ heading: string }> = (props) => {
  return (
    <section className="relative max-sm:px-4 pt-20 flex items-center max-xl:px-5 w-full h-[400px] max-sm:h-[300px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0" />
      <picture className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
        <source srcSet={heroBgWEBP.src} type="image/webp" />
        <Image
          src={heroBg}
          priority={true}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
        />
      </picture>

      <div className="max-w-screen-xl m-auto w-full z-0 flex justify-center">
        <h1 className="text-5xl font-bold max-lg:text-5xl max-sm:text-3xl text-white">
          {props.heading}
        </h1>
      </div>
    </section>
  );
};

export default CommonLanding;
