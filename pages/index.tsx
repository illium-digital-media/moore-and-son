import IntroSection from "../components/sections/IntroSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IntroSection2 from "@/components/sections/IntroSection copy";

const sections = [
  { Component: IntroSection2 },
  { Component: WhyChooseUs },
  { Component: TestimonialsSection },
  { Component: AboutUsSection },
  { Component: FAQ },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <LandingSection />
      {sections.map(({ Component }, index) => (
        <Section key={index} index={index}>
          <Component />
        </Section>
      ))}
    </>
  );
};

export default HomePage;
