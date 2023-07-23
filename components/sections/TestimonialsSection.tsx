import TestimonialsCarousel from "../TestimonialsCarousel";
import Image from "next/image";
import Bg from "../../assets/bg.jpg";
import TestimonialsCards from "../TestimonialsCards";

const TestimonialsSection: React.FC = () => {
  return (
    <section>
      <div className="max-w-screen-lg m-auto flex max-lg:block max-lg:text-center items-start flex max-lg:px-4 max-lg:py-10">
          <div className="col flex center-left">
            <div className="text-center">
                <h3 className="font-bold text-primary text-4xl">
                  Testimonials
                </h3>
                <TestimonialsCards />
            </div>
          </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
