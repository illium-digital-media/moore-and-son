import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import Gallery from "@/components/Gallery";

const ResidentialPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Gallery"} />
      <Gallery/>

    </>
  );
};

export default ResidentialPage;
