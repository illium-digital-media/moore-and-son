import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { whyChooseUs } from "@/data/whychooseus";
import Slider from "react-slick";
import { WhyChooseUsCard } from "./WhyChooseUsCard";

const WhyChooseUsSlider: React.FC<{}> = ({}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "30px",
    variableWidth: true,
    innerHeight:'40px',
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
        {whyChooseUs.map((item, index) => (
          <div className="flex flex-wrap px-1" key={index}>
            <WhyChooseUsCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhyChooseUsSlider;
