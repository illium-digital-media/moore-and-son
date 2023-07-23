import ContactForm from "../components/ContactForm";
import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";

const contactCardsData = [
  {
    heading: "Email us",
    copy: "For general inquiries and questions, contact us via email.",
    linkText: "info@theperfectpainter.co.uk",
    link: "mailto:info@theperfectpainter.co.uk",
  },
  {
    heading: "Call us",
    copy: "Tell us your needs and we’ll send you a free estimate.",
    linkText: "0203 105 5111",
    link: "tel:02031055111",
  },
  {
    heading: "WhatsApp",
    copy: "For general inquiries and questions, reach us on WhatsApp.",
    linkText: "+44 7861 312295",
    link: "https://wa.link/tmwizz",
  },
];

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Contact"} />
      <section className="py-10 max-sm:px-4">
        <div className="max-w-screen-lg flex m-auto max-sm:block shadow-lg">
          <div className="pr-20">
            <h3 className="f-w-900 text-primary text-4xl font-bold pb-1">
              Say Hi!
            </h3>
            <p className="pb-5">
              Send us your query and one of our agents will get back to you!
            </p>
            <ContactForm />
          </div>
          <div className="bg-primary text-white">
            AlTech Painting LLC (480) 242-4186 andy@altechpainting.com
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
