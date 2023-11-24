import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import ServicesPreview from "@/components/sections/ServicesPreview";

const ServicesPage: React.FC = () => {
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
