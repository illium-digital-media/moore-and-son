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
import { useEffect, useState } from 'react';


const HomePage = () => {
  const [loadGA, setLoadGA] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setLoadGA(true);
      cleanup();
    };

    const timerId = setTimeout(handleUserInteraction, 2000);

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });
    document.addEventListener('mousemove', handleUserInteraction, { once: true });

    const cleanup = () => {
      clearTimeout(timerId);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('mousemove', handleUserInteraction);
    };

    return cleanup;
  }, []);
  return (
    <>
      {loadGA && (
        <>
          <Script
            id="gtm-script"
            src="https://www.googletagmanager.com/gtag/js?id=G-CQRNH0XQM6"
            strategy="afterInteractive"
          />
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CQRNH0XQM6');
              `,
            }}
          />
        </>
      )}
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
