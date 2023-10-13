import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import ServicesPreview from "@/components/sections/ServicesPreview";
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
        <ServicesPreview />
    </>
  );
};

export default ServicesPage;
