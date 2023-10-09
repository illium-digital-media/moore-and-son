import AboutUs from "../components/sections/AboutUs";

import Head from "next/head";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LandingAndServices from "@/components/sections/LandingAndServices";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import FAQs from "../components/sections/FAQs";
import GalleryPreview from "../components/sections/GalleryPreview";

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
      <GalleryPreview />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default HomePage;
