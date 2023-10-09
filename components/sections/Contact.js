import React from "react";
import styles from "./Contact.module.css"; // Import your CSS module file

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }).catch((error) => alert(error));
    setFormData({ name: "", email: "", message: "", number: "" });
    setIsSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>Contact Us</span>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.text}>
            We are a team of passionate and creative individuals dedicated to
            crafting captivating designs that leave a lasting impression.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <picture className={styles.iconWrapper}>
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-76.svg"
                  alt="phone icon"
                  className={styles.icon}
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className={styles.flexGroup}>
                <span className={styles.header}>Phone</span>
                <a href="tel:888-4565-789" className={styles.link}>
                  +1 (888) 4565 789
                </a>
              </div>
            </li>
            <li className={styles.li}>
              <picture className={styles.iconWrapper}>
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg"
                  alt="address icon"
                  className={styles.icon}
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className={styles.flexGroup}>
                <span className={styles.header}>Email</span>
                <a href="mailto:Email@stitch.com" className={styles.link}>
                  Email@stitch.com
                </a>
              </div>
            </li>
            <li className={styles.li}>
              <picture className={styles.iconWrapper}>
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pin-76.svg"
                  alt="address icon"
                  className={styles.icon}
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className={styles.flexGroup}>
                <span className={styles.header}>Address</span>
                <a href="" className={styles.link}>
                  2553 Woodbridge Lane, Boston Ware 120
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* Form */}
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          name="Contact Form"
          method="post"
          data-netlify="true"
        >
          <h3 className={styles.h3}>Make Appointment</h3>
          <label className={styles.label}>
            Name
            <input
              value={formData.name}
              handleInputChange={handleChange}
              className={styles.input}
              required
              type="text"
              id="name-1388"
              name="name"
              placeholder="Name"
            />
          </label>
          <label className={`${styles.label} ${styles.email}`}>
            Email
            <input
              value={formData.email}
              handleInputChange={handleChange}
              className={styles.input}
              required
              type="email"
              id="email-1388"
              name="email"
              placeholder="Email"
            />
          </label>
          <label className={`${styles.label} ${styles.phone}`}>
            Phone
            <input
              value={formData.number}
              handleInputChange={handleChange}
              className={styles.input}
              required
              type="number"
              id="phone-1388"
              name="phone"
              placeholder="Phone"
            />
          </label>
          <label className={styles.label}>
            Message
            <textarea
              value={formData.message}
              onChange={handleChange}
              className={`${styles.input} ${styles.textarea}`}
              required
              name="Message"
              id="message-1388"
              placeholder="Write message..."
            ></textarea>
          </label>
          <button
            className={`${styles.buttonSolid} ${styles.submit}`}
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
