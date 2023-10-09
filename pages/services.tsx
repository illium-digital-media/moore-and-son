import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import ServicesSection from "@/components/sections/ServicesSection";
import Services from "../components/Section";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Services | Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Services"} />
      <Services index={0}>
        <ServicesSection />
      </Services>
    </>
  );
};

export default ServicesPage;
