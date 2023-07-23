import GetAQuoteButton from "../CTAs/GetAQuoteButton";
import PhotoGallery from "../PhotoGallery";

const imageGallery = [
  // Add the paths or URLs of your images here
  "https://altechpainting.com/wp-content/uploads/2019/01/3-1.png",
  "https://altechpainting.com/wp-content/uploads/2019/01/5-1.png",
  "https://altechpainting.com/wp-content/uploads/2019/01/4-1.png",
  // ... and so on
];

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us">
      <div className="flex max-w-screen-lg m-auto lg:pt-20 max-lg:py-10 max-lg:px-4 text-white">
        <div className=" bg-primary w-2/4 flex rounded-l-xl">
          <div className="my-auto px-10 ">
          <h3 className=" text-2xl font-bold pb-4">What We Stand For</h3>
          <p>
            From the exterior of your home or business to the interior rooms or
            surrounding cool decks, no painting project is too large for us! We
            are committed to providing the highest level of professionalism,
            service response, and quality workmanship all at an affordable price
          </p>
          <GetAQuoteButton />
          </div>

        </div>
        <div className="w-2/4">
          <PhotoGallery images={imageGallery} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;