import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import ServicesSection from "@/components/sections/ServicesSection";

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Services"} />
      <ServicesSection />
    </>
  );
};

export default TestimonialsPage;
