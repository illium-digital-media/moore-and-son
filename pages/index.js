import AboutUs from "../components/sections/AboutUs";
import Head from "next/head";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import LandingCenter from "../components/LandingCenter/LandingCenter";
import FAQs from "../components/sections/FAQs";
import GalleryPreview from "../components/sections/GalleryPreview";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

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
      <LandingCenter />
      <Services />
      <AboutUs />
      <Stats />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
