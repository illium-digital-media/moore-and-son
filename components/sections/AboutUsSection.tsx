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
    <div className="flex max-w-screen-lg m-auto max-lg:px-4">
      <div className="sm:w-2/4 flex rounded-xl">
        <div className="my-auto sm:px-10 ">
          <div className="sm:hidden pb-3">
            <PhotoGallery images={imageGallery} />
          </div>
          <h3 className="text-2xl font-bold pb-4">What We Stand For</h3>
          <p className="pb-4">
            From the exterior of your home or business to the interior rooms or
            surrounding cool decks, no painting project is too large for us! We
            are committed to providing the highest level of professionalism,
            service response, and quality workmanship all at an affordable price
          </p>
          <GetAQuoteButton />
        </div>
      </div>
      <div className="w-2/4 max-sm:hidden">
        <PhotoGallery images={imageGallery} />
      </div>
    </div>
  );
};

export default AboutUsSection;
