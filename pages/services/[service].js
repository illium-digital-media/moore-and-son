import CommonLanding from "../../components/sections/CommonLanding";
import Head from "next/head";
import { useRouter } from "next/router";
import Example1 from "/assets/example-1.png";
import Example2 from "/assets/example-2.png";
import Example3 from "/assets/example-3.png";

import { StaticImageData } from "next/image";
import Service from "@/components/Service";
import Section from "@/components/Section";

const servicesData = {
  commercial: {
    topper: "Commercial",
    title: "Commercial Painting",
    paragraph:
      "In the bustling commercial hubs of the UK, first impressions can set the tone for lasting business relationships. A pristine paint job speaks volumes about the professionalism and care a business invests in its appearance. At Moore and Son, we harness our deep understanding of commercial spaces to recommend the right product and technique for each project. This not only ensures a captivating appearance but also guarantees durability in high-traffic environments.",
    images: [Example1, Example2, Example3],
    bulletPoints: [
      "Office Painting",
      "Retail Space Refurbishing",
      "Warehouse Painting",
      "Commercial Exterior Revamp",
      "Safety Line Markings",
      "Specialized Industrial Coatings",
      "High-Durability Floor Painting",
    ],
  },
  interior: {
    topper: "Interior",
    title: "Interior Painting",
    paragraph:
      "In the cosy homes and dynamic businesses of Coventry and beyond, interior painting plays a pivotal role in setting the ambiance. Ensuring a top-notch paint job is integral to creating spaces that reflect warmth, comfort, and character. Our team at Moore and Son provides insights into the best products and application methods, promising not just a visually pleasing result but an environment that resonates with its inhabitants.",
    images: [Example1, Example2, Example3],
    bulletPoints: [
      "Wall & Ceiling Painting",
      "Woodwork Varnishing",
      "Moulding & Trim Painting",
      "Specialty Finishes",
      "Wallpaper Removal & Application",
      "Decorative Painting Techniques",
    ],
  },
  exterior: {
    topper: "Exterior",
    title: "Exterior Painting",
    paragraph:
      "The diverse weather conditions in the UK make exterior painting a critical aspect of property maintenance. A meticulously executed paint job is essential for preserving the external charm of any structure. With Moore and Son's expertise, we guide you in selecting the most suitable products and application methods, delivering a result that not only amplifies beauty but stands as a protective shield against the elements.",
    images: [Example1, Example2, Example3],
    bulletPoints: [
      "Façade Painting",
      "Weatherproof Coatings",
      "Garden Shed & Garage Painting",
      "Masonry & Brickwork Painting",
      "Gutter & Downspout Painting",
      "Door & Window Frame Painting",
      "Surface Preparation & Priming",
    ],
  },
};

const ServicePage = () => {
  const router = useRouter();
  const serviceId = router.query.service;
  const serviceData = servicesData[serviceId];

  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      {serviceData && (
        <>
          <CommonLanding heading={serviceData.title ?? "Services"} />
          <Service
            topper={serviceData.topper}
            title={serviceData.title}
            content={serviceData.paragraph}
            imageGallery={serviceData.images}
            bulletPoints={serviceData.bulletPoints}
          />
        </>
      )}
    </>
  );
};

export default ServicePage;
