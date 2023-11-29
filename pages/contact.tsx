import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";
import Contact from "@/components/sections/Contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Contact Moore and Son for top-tier painting services in Coventry. Get in touch today for a consultation and see how we can make your painting project a reality with unparalleled quality and service."
        />
      </Head>
      <CommonLanding heading={"Contact"} />
      <Contact />
    </>
  );
};

export default ContactPage;
