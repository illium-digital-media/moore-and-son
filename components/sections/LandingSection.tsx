import GetAQuoteButton from "../CTAs/GetAQuoteButton";

const LandingSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center pt-20"
      style={{
        backgroundImage: `url("https://altechpainting.com/wp-content/uploads/2019/01/slider-2.png")`,
      }}
    >
      <div className="max-w-screen-lg max-lg:max-w-screen-sm flex items-center max-sm:px-4 m-auto h-[500px] max-lg:h-[450px]">
        <div className="text-white">
          <h3 className="text-5xl font-bold max-lg:text-3xl">
            Your local London <br />
            Painters &amp; Decorators
          </h3>
          <p className="py-4">
            Professional Painters and Decorators in London.
          </p>
          <GetAQuoteButton />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
