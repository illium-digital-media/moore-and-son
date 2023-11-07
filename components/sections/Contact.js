import Image from "next/image";
import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./Contact.module.css";
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
  
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
  
      // Clear form data and set the submitted state only after fetch completes
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(true);
    } catch (error) {
      alert(error);
    }
  };
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <picture className={styles.picture}>
          <Image src={interior1.src} alt="kitchen" width="610" height="425" />
        </picture>
        <div className={styles.content}>
          <Topper text="Contact Us" />
          <Title title="Get in Touch" />
          <p className={styles.text}>
            Have questions or a project in mind? Reach out to the dedicated team
            at Moore and Son. We&apos;re here to discuss your vision, offer insights,
            and bring your ideas to vibrant life. Your next transformation is
            just a conversation away.
          </p>
          {/* Form */}
          <form
            className={styles.form}
            id="contact-form"
            name="contact-form"
            method="post"
            onSubmit={handleSubmit}
            data-netlify="true"
          >
            <input type="hidden" name="contact-form" value="contact-form" />

            <label className={styles.label}>
              <input
                className={styles.input}
                required
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className={`${styles.label} ${styles.email}`}>
              <input
                className={styles.input}
                required
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className={`${styles.label} ${styles.phone}`}>
              <input
                className={styles.input}
                required
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label className={styles.label}>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                required
                id="message"
                name="message"
                placeholder="Write message..."
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <button
              className={`${styles.buttonSolid} ${styles.submit}`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
