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
    paragraph: [
      "No commercial job is too big or too small! We offer professional commercial painting services to enhance the appearance and protection of your business property.",
      "Our experienced team of commercial painters is skilled in handling various commercial projects, from office buildings to retail spaces and more.",
      "We use high-quality paints and advanced techniques to deliver exceptional results that meet the specific needs of your commercial property.",
      "With our commercial painting services, you can create a positive and lasting impression on your customers and clients.",
      "We work with businesses across different industries, and we are committed to delivering top-notch painting solutions that exceed your expectations.",
    ],
    images: [Example1, Example2, Example3],
  },
  interior: {
    topper: "Interior",
    title: "Interior Painting",
    paragraph: [
      "Transform your living spaces into elegant and inviting sanctuaries with our exceptional interior painting services. At [Company Name], we take immense pride in our meticulous attention to detail and passion for delivering unparalleled results. Our team of skilled painters is dedicated to enhancing the beauty and ambiance of your home, providing you with a stunning space that reflects your unique style and personality.",
      "Whether you're looking to revamp a single room or give your entire home a fresh new look, we've got you covered. Our interior painting experts possess a wealth of experience and knowledge, ensuring that every stroke of the brush is executed with precision and finesse. From classic to contemporary, our talented team can bring any design vision to life, creating a space that feels warm, inviting, and effortlessly chic.",
      "We understand that your home is your sanctuary, and that's why we go the extra mile to treat it with the utmost care and respect. Before commencing any painting project, our professional team will take the time to meticulously prepare your walls and surfaces to ensure a flawless and long-lasting finish. We use only the highest quality paints and materials, so you can rest assured that your investment will stand the test of time.",
      "What truly sets our interior painting services apart is our commitment to customer satisfaction. We believe in clear communication and collaborative design, working closely with you to understand your preferences and tailor our services to meet your specific needs. Our goal is to exceed your expectations and provide you with an interior that leaves a lasting impression on both you and your guests.",
      "Let us bring your dream interior to life! Whether you're looking to create a cozy bedroom, a stylish living room, or a vibrant kitchen, our interior painting services will elevate your space to new heights. Experience the transformative power of color and design with [Company Name], your trusted partner in painting and decorating. Get in touch with us today to schedule a consultation and take the first step towards a beautiful, inspiring home.",
    ],

    images: [Example1, Example2, Example3],
  },
  exterior: {
    topper: "Exterior",
    title: "Exterior Painting",
    paragraph: [
      "It is very important to regularly maintain the exterior of your property by properly prepping and repainting around every 5-7 years.",
      "Our exterior painting services will protect and beautify your property, increasing its curb appeal and value.",
      "We use weather-resistant paints that can withstand harsh outdoor conditions, ensuring that your property looks fresh and vibrant for years to come.",
      "Our experienced team of painters will carefully inspect the exterior of your property and address any surface issues before starting the painting process.",
      "We take pride in delivering exceptional exterior painting results that enhance the overall aesthetics of your home or business.",
      "Whether you need to repaint the entire exterior or focus on specific areas, we are here to provide reliable and efficient painting solutions.",
    ],
    images: [Example1, Example2, Example3],
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
          />
        </>
      )}
    </>
  );
};

export default ServicePage;
