import React from 'react';
import styles from './WhyChooseUs.module.css'; // Import the CSS module

const WhyChooseUs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Section */}
                <div className={styles.content}>
                    <span className={styles.topper}>Who We Are</span>
                    <h2 className={styles.title}>Expert Cleaning Service You Can Trust</h2>
                    <p className={styles.text}>
                        At Stitch Cleaning Service, let us help you solve problems so that you can focus on your mission. We support businesses through periods.
                    </p>
                    {/* Image of cleaners */}
                    <picture className={styles.picture}>
                        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaners-m.jpg" />
                        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaners.jpg" />
                        <img aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaners.jpg" alt="cleaners" width="275" height="132" />
                    </picture>
                </div>
                {/* Cards */}
                <ul className={styles.cardGroup}>
                    <li className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <img className={styles.icon} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/person-blue.svg" alt="icon" width="48" height="48" />
                            {/* Create a span to make more bubbles with pseudo elements */}
                            <span className={styles.bubble} aria-hidden="true"></span>
                        </div>
                        <div className={styles.flex}>
                            <h3 className={styles.h3}>Expert Employee</h3>
                            <p className={styles.itemText}>
                                We’ve helped thousands of organizations to transform their company to become relevant of helped thousands.
                            </p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <img className={styles.icon} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/hand-blue.svg" alt="icon" width="48" height="48" />
                            {/* Create a span to make more bubbles with pseudo elements */}
                            <span className={styles.bubble} aria-hidden="true"></span>
                        </div>
                        <div className={styles.flex}>
                            <h3 className={styles.h3}>Affordable Package</h3>
                            <p className={styles.itemText}>
                                We’ve helped thousands of organizations to transform their company to become relevant of helped thousands.
                            </p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <img className={styles.icon} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/stars-thumbs.svg" alt="icon" width="48" height="48" />
                            {/* Create a span to make more bubbles with pseudo elements */}
                            <span className={styles.bubble} aria-hidden="true"></span>
                        </div>
                        <div className={styles.flex}>
                            <h3 className={styles.h3}>100% Satisfaction</h3>
                            <p className={styles.itemText}>
                                We’ve helped thousands of organizations to transform their company to become relevant of helped thousands.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default WhyChooseUs;
