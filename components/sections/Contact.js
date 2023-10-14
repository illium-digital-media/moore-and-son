import Image from "next/image";
import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./Contact.module.css";
import photo6 from "../../assets/photo6.jpg";

function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <picture className={styles.picture}>
          <Image src={photo6.src} alt="kitchen" width="610" height="425" />
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
            id="cs-form-717"
            name="Contact Form"
            method="post"
          >
            <label className={styles.label}>
              <input
                className={styles.input}
                required
                type="text"
                id="name-717"
                name="name"
                placeholder="Name"
              />
            </label>
            <label className={`${styles.label} ${styles.email}`}>
              <input
                className={styles.input}
                required
                type="text"
                id="email-717"
                name="email"
                placeholder="Email"
              />
            </label>
            <label className={`${styles.label} ${styles.phone}`}>
              <input
                className={styles.input}
                required
                type="text"
                id="phone-717"
                name="phone"
                placeholder="Phone"
              />
            </label>
            <label className={styles.label}>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                required
                name="Message"
                id="message-717"
                placeholder="Write message..."
              ></textarea>
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
