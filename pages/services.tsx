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
          content="Explore our range of painting services at Moore and Son. From detailed interior painting to durable exteriors and commercial spaces, we cover all your painting needs in Coventry with excellence."
        />
      </Head>
      <CommonLanding heading={"Services"} />
      <ServicesPreview />
    </>
  );
};

export default ServicesPage;
