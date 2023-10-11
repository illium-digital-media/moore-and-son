import React from 'react';
import styles from './Footer.module.css'; 
import navigationItems from '../../data/navigation';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoGroup}>
                    <a aria-label="Go back to home" className={styles.logo} href="">
                        <img className={styles.logoImg} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Footer/logo-light.svg" alt="logo" width="240" height="32" />
                    </a>
                    <p className={styles.text}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Richard Latin professor at Hampden. Lorem Ipsum is not simply random text.
                    </p>
                    <div className={styles.social}>
                        <a className={styles.socialLink} aria-label="Visit Facebook profile" href="">
                            <img className={styles.socialImg} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fface-grey1.svg" alt="Facebook" width="11" height="11" />
                        </a>
                        <a className={styles.socialLink} aria-label="Visit Twitter profile" href="">
                            <img className={styles.socialImg} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Finstragm-grey3.svg" alt="Twitter" width="6" height="11" />
                        </a>
                        <a className={styles.socialLink} aria-label="Visit Instagram profile" href="">
                            <img className={styles.socialImg} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Ftwitter-grey1.svg" alt="Instagram" width="11" height="11" />
                        </a>
                    </div>
                </div>
                <div className={styles.ulWrapper}>
                    <span className={styles.header}>Quick Links</span>
                    <ul className={styles.ul}>
                        {navigationItems.map((link, index) => (
                            <li className={styles.li} key={index}>
                                <a className={styles.link} href={link.link}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.ulWrapper}>
                    <span className={styles.header}>Contact Information</span>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <a className={styles.link} href="" target="_blank">
                                <img className={styles.icon} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fclock-grey.svg" alt="Clock icon" width="20" height="20" />
                                M-F 7am – 3pm
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a className={styles.link} href="tel:07961814490">
                                <img className={styles.contactIcon} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fphone-grey.svg" alt="Phone icon" width="20" height="20" />
                                07961 814490
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a className={styles.link} href="mailto:mooreandson.decorators@yahoo.com">
                                <img className={styles.icon} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fmessage-grey.svg" alt="Email icon" width="20" height="20" />
                                mooreandson.decorators@yahoo.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <span className={styles.credit}>
                    © Copyright 2023 | Built by: <a href="https://www.illiumdigitalmedia.com/" className={`text-white ${styles.creditLink}`} target="_blank">Illium Digital Media</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
