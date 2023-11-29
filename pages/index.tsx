import AboutUs from "../components/sections/AboutUs";
import Head from "next/head";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import LandingCenter from "../components/LandingCenter/LandingCenter";
import GalleryPreview from "../components/sections/GalleryPreview";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import useGoogleAnalytics from "@/data/analytics";

const HomePage = () => {
  useGoogleAnalytics();

  return (
    <>
      <Head>
        <title>Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Discover Moore and Son's professional painting services for homes and businesses in Coventry. Expert craftsmanship, attention to detail, and dedicated customer service. Click to elevate your space!"
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
