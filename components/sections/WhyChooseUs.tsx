import { whyChooseUs } from "@/data/whychooseus";
import { WhyChooseUsCard } from "../WhyChooseUsCard";
import WhyChooseUsSlider from "../WhyChooseUsSlider";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="max-sm:hidden max-w-screen-lg m-auto max-lg:px-5">
        <h3 className="font-bold text-4xl pb-10 text-center">Why Choose Us</h3>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {whyChooseUs.map((item, index) => (
            <WhyChooseUsCard item={item} key={index} />
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <h3 className="font-bold text-4xl pb-10 text-center">Why Choose Us</h3>
          <WhyChooseUsSlider />
      </div>
    </>
  );
};

export default WhyChooseUs;
