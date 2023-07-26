import IntroCards from "../IntroCards";
import Section from "../Section";

const IntroSection: React.FC = () => {
  return (
    <Section>
      <div className="max-w-screen-lg m-auto max-sm:px-4 flex">
       <IntroCards />
      </div>
    </Section>
  );
};

export default IntroSection;
