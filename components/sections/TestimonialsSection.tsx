import TestimonialsCards from "../TestimonialsCards";
import CardSlider from "../TestimonialsSlider";
import TestimonialsSlider from "../TestimonialsSlider";

const generateSampleDataForImageSlider = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      thumbnail: "https://picsum.photos/280",
      reach: 200000,
      comment: 11100,
    });
  }

  return data;
};
const TestimonialsSection: React.FC = () => {
  return (
    <>
      <div className="max-sm:hidden max-w-screen-lg m-auto max-lg:block max-lg:text-center items-start flex max-lg:px-4 max-lg:py-10">
        <div className="col flex center-left">
          <div className="text-center">
            <h3 className="font-bold text-4xl pb-10">Testimonials</h3>
            <TestimonialsCards />
          </div>
        </div>
      </div>

      <div className="sm:hidden text-center">
        <h3 className="font-bold text-4xl pb-10">Testimonials</h3>
        <CardSlider />
      </div>
    </>
  );
};

export default TestimonialsSection;
