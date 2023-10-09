import AboutUs from "../components/sections/AboutUs";
import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import AboutMe from "../components/sections/AboutMe";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"About Us"} />
      <AboutMe />
      <AboutUs />

    </>
  );
};

export default AboutPage;
