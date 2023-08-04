import TestimonialsCards from "../Testimonials/TestimonialsCards";
import TestimonialsSlider from "../Testimonials/TestimonialsSlider";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection: React.FC = () => {
  return (
    <>
      <div className="max-sm:hidden max-w-screen-lg m-auto max-lg:block max-lg:text-center items-start flex max-lg:px-4 max-lg:py-10">
        <div className="col flex center-left">
          <div className="text-center">
            <h3 className="font-bold text-4xl pb-10">Testimonials</h3>
            <TestimonialsCards testimonials={testimonials} />
          </div>
        </div>
      </div>

      <div className="sm:hidden text-center">
        <h3 className="font-bold text-4xl pb-10">Testimonials</h3>
        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </>
  );
};

export default TestimonialsSection;
