import AboutUs from "../components/sections/AboutUs";
import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import AboutMe from "../components/sections/AboutMe";

const AboutPage = () => {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CQRNH0XQM6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-CQRNH0XQM6');
            `
          }}
        />
        <title>About Us | Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Meet Wayne of Moore and Son, where a father's legacy of craftsmanship shapes every meticulous project in Coventry. Experience direct, personal service and see how a decade of painting passion translates into superior quality for your space. Discover our story of commitment to excellence."
        />
      </Head>
      <CommonLanding heading={"About Us"} />
      <AboutMe />
      <AboutUs />

    </>
  );
};

export default AboutPage;
