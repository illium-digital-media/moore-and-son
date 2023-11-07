import Image from "next/image";
import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import interior1 from "../../assets/interior1.jpeg";
import { useState } from "react";


function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }).catch((error) => alert(error));
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(true);
  };

  return (
    <section className={`p-section relative z-10`}>
      <div className={`mx-auto flex justify-center items-center flex-col gap-14 w-full max-w-xs sm:max-w-lg lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-14`}>
        <picture className={`w-full h-auto relative lg:h-[52rem]`}>
          <Image src={interior1.src} alt="kitchen" width="610" height="425" className="w-full h-full object-cover absolute top-0 left-0" />
        </picture>
        <div className={`text-left w-full flex flex-col items-start`}>
          <Topper text="Contact Us" />
          <Title title="Get in Touch" />
          <p className={`mb-8`}>
            Have questions or a project in mind? Reach out to the dedicated team
            at Moore and Son. We&apos;re here to discuss your vision, offer insights,
            and bring your ideas to vibrant life. Your next transformation is
            just a conversation away.
          </p>
          {/* Form */}
          <form
            className={`bg-gray-100 py-4 px-5 md:py-12 md:px-8 flex justify-between flex-wrap items-center gap-2 w-full`}
            id="contact-form"
            name="contact-form"
            method="post"
            onSubmit={handleSubmit}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <label className={`text-sm sm:text-base w-full text-header flex flex-col justify-center items-start gap-2`}>
              <input
                className={`w-full h-14 pl-6 text-header bg-white border-none box-border placeholder-gray-400`}
                required
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className={`text-sm sm:text-base w-full text-header flex flex-col justify-center items-start gap-2`}>
              <input
                className={`w-full h-14 pl-6 text-header bg-white border-none box-border placeholder-gray-400`}
                required
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className={`text-sm sm:text-base w-full text-header flex flex-col justify-center items-start gap-2`}>
              <input
                className={`w-full h-14 pl-6 text-header bg-white border-none box-border placeholder-gray-400`}
                required
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label className={`text-sm sm:text-base w-full text-header flex flex-col justify-center items-start gap-2`}>
              <textarea
                className={`w-full h-14 pl-6 text-header bg-white border-none box-border min-h-[7.5rem] pt-6 mb-2 w-full placeholder-gray-400`}
                required
                id="message"
                name="message"
                placeholder="Write message..."
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <button
              className={`text-base leading-[clamp(2.875rem,5.5vw,3.5rem)] font-bold text-center m-0 text-white bg-primary inline-block relative z-10 box-border transition-colors duration-300 w-40 px-6 before:absolute before:inset-0 before:bg-black before:w-0 before:h-full before:transition-width before:duration-300 hover:before:w-full before:text-white before:-z-10 min-w-[18rem]`}
              type="submit"
            >
              Submit
            </button>
            {isSubmitted && (
              <div className="mt-4 p-2 bg-green-500 text-white rounded">
                We have received your message and will get back to you shortly!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
