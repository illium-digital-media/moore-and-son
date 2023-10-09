import AboutUs from "../components/sections/AboutUs";

import Head from "next/head";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LandingAndServices from "@/components/sections/LandingAndServices";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";

const sections = [];

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <LandingAndServices />
      <AboutUs />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage;
