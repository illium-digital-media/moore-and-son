import ContactForm from "../components/ContactForm";
import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";
import Contact from "@/components/sections/Contact";

import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import Section from "@/components/Section";

const ContactPage = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <Head>
        <title>Contact Us | Moore & Son Painting and Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Contact"} />
      <Contact />
      <Section index={0} classes={"max-lg:px-3"}>
        <div
          className={`max-w-screen-lg rounded-lg flex m-auto max-sm:block shadow-lg border border-gray-300  ${
            darkMode ? "bg-zinc-600" : "bg-white"
          }`}
        >
          <div className="bg-primary text-white w-1/2 max-sm:w-full rounded-t-lg flex items-center p-10 max-lg:p-5 sm:hidden">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-bold">Example Company Name</h3>
              <span>Phone Number: 0123 456 789 </span>
              <span>Email: exampleemail@gmail.com</span>
            </div>
          </div>
          <div className="p-10 max-lg:p-5 w-1/2 max-sm:w-full">
            <h3 className="f-w-900 text-4xl font-bold pb-1">Say Hi!</h3>
            <p className="pb-5">
              Send us your query and one of our agents will get back to you!
            </p>
            <ContactForm />
          </div>
          <div className="bg-primary text-white w-1/2 max-sm:w-full rounded-r-lg flex items-center p-10 max-sm:hidden">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-bold">Example Company Name</h3>
              <span>Phone Number: 0123 456 789 </span>
              <span>Email: exampleemail@gmail.com</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
