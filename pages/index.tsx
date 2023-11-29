import AboutUs from "../components/sections/AboutUs";
import Head from "next/head";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import LandingCenter from "../components/LandingCenter/LandingCenter";
import GalleryPreview from "../components/sections/GalleryPreview";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import Script from "next/script";

const HomePage = () => {
  return (
    <>
      <Script id="test2"
       strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-CQRNH0XQM6"
      />
      <Script
        id="test3"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-CQRNH0XQM6');
            `
        }}
      />
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
