import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { TestimonialCard } from "./TestimonialCard";

type Item = {
  name: string;
  comment: string;
  image: StaticImageData;
};

const TestimonialsSlider: React.FC<{ testimonials: Item[] }> = ({
  testimonials,
}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "40px",
    // Default is true, but you can explicitly set it here.
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-x-clip flex flex-col h-full">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="flex flex-wrap px-2" key={index}>
            <TestimonialCard testimonial={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
