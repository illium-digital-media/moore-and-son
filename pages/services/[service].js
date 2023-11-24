import CommonLanding from "../../components/sections/CommonLanding";
import Head from "next/head";
import { useRouter } from "next/router";
import servicesData from "@/data/services";
import Service from "@/components/Service";

const metaDefault = "Discover Moore and Son's painting services tailored to meet the unique needs of each space. From commercial to residential, interiors to exteriors, our dedicated team brings exceptional craftsmanship to every project. Learn more about our services and how we can bring your vision to life.";

const ServicePage = () => {
  const router = useRouter();
  const serviceId = router.query.service;
  const serviceData = servicesData[serviceId];

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
        <title>{serviceData ? `${serviceData.heading} | ` : ""}Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content={serviceData ? `${serviceData.meta} | ` : metaDefault}
        />
      </Head>
      {serviceData && (
        <>
          <CommonLanding heading={serviceData.heading ?? "Services"} />
          <Service
            topper={serviceData.topper}
            title={serviceData.title}
            content={serviceData.paragraph}
            images={serviceData.images}
            bulletPoints={serviceData.bulletPoints}
          />
        </>
      )}
    </>
  );
};

export default ServicePage;
