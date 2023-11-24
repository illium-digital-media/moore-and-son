import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import Gallery from "@/components/Gallery";

const ResidentialPage = () => {
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
