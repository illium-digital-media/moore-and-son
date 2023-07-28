import TestimonialsCards from "../TestimonialsCards";
import Section from "../Section";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="max-w-screen-lg m-auto max-lg:block max-lg:text-center items-start flex max-lg:px-4 max-lg:py-10">
      <div className="col flex center-left">
        <div className="text-center">
          <h3 className="font-bold text-primary text-4xl pb-10">
            Testimonials
          </h3>
          <TestimonialsCards />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
