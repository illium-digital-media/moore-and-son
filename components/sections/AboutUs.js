// AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <picture className={styles.picture}>
                    {/* Mobile Image */}
                    <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg" />
                    {/* Tablet and above Image */}
                    <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg" />
                    <img
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"
                        alt="room"
                        width="494"
                        height="700"
                    />
                </picture>
                <div className={styles.content}>
                    <span className={styles.topper}>What We Do</span>
                    <h2 className={styles.title}>House Painting Contractors For Oak Harbor</h2>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className={styles.text}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <a href="" className={styles.buttonSolid}>Get Free Quote</a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
