import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import Gallery from "@/components/Gallery";

const ResidentialPage = () => {
  return (
    <>
      <Head>
        <title>Gallery | Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Gallery"} />
      <Gallery />
    </>
  );
};

export default ResidentialPage;
