import { StaticImageData } from "next/image";
import { TestimonialCard } from "./TestimonialCard";

type Item = {
  name: string;
  comment: string;
  image: StaticImageData;
};

const Testimonials: React.FC<{ testimonials: Item[] }> = ({ testimonials }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonialItem, index) => (
        <TestimonialCard testimonial={testimonialItem} key={index} />
      ))}
    </div>
  );
};

export default Testimonials;
