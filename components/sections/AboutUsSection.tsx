import InfoCard from "../Service";
import Example1 from "/assets/example-1.png";
import Example2 from "/assets/example-2.png";
import Example3 from "/assets/example-3.png";
import ContactButton from "../CTAs/ContactButton";

const imageGallery = [Example1, Example2, Example3];

const AboutUsSection: React.FC = () => {
  return (
    <InfoCard
      title="What We Stand For"
      content={[
        "From the exterior of your home or business to the interior rooms or surrounding cool decks, no painting project is too large for us! We are committed to providing the highest level of professionalism, service response, and quality workmanship all at an affordable price",
      ]}
      imageGallery={imageGallery}
    >
      <ContactButton />
    </InfoCard>
  );
};

export default AboutUsSection;
