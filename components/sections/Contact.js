import React from 'react';
import Title from '../Title/Title';
import Topper from '../Topper/Topper';
import styles from './Contact.module.css';

function Contact() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <picture className={styles.picture}>
                    <source
                        media="(max-width: 600px)"
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fruuner1-m.jpg"
                    />
                    <source
                        media="(min-width: 601px)"
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Frunner1.jpg"
                    />
                    <img
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Frunner1.jpg"
                        alt="runner"
                        width="610"
                        height="425"
                        aria-hidden="true"
                    />
                </picture>
                <div className={styles.content}>
                  <Topper text='Contact Us' />
                  <Title title='Get in Touch' />
                    <p className={styles.text}>
                        In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris
                        laoreet, iaculis libero quis.
                    </p>
                    {/* Form */}
                    <form className={styles.form} id="cs-form-717" name="Contact Form" method="post">
                        <label className={styles.label}>
                            Name
                            <input className={styles.input} required type="text" id="name-717" name="name" placeholder="Name" />
                        </label>
                        <label className={`${styles.label} ${styles.email}`}>
                            Email
                            <input className={styles.input} required type="text" id="email-717" name="email" placeholder="Email" />
                        </label>
                        <label className={`${styles.label} ${styles.phone}`}>
                            Phone
                            <input className={styles.input} required type="text" id="phone-717" name="phone" placeholder="Phone" />
                        </label>
                        <label className={styles.label}>
                            Message
                            <textarea className={`${styles.input} ${styles.textarea}`} required name="Message" id="message-717" placeholder="Write message..."></textarea>
                        </label>
                        <button className={`${styles.buttonSolid} ${styles.submit}`} type="submit">Make an Appointment</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
