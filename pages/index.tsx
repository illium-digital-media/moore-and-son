import IntroSection from "../components/sections/IntroSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import GetQuoteSection from "../components/sections/GetQuoteSection";
import PerfectPainterSection from "../components/sections/PerfectPainterSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

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
      <Section index={0}>
        <IntroSection />
      </Section>
      <Section index={1}>
        <TestimonialsSection />
      </Section>
      <Section index={2}>
        <AboutUsSection />
      </Section>
      <Section index={3}>
        <FAQ />
      </Section>
    </>
  );
};

export default HomePage;
