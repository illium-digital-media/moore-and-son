import React from "react";
import Title from "../Title/Title";
import Topper from "../Topper/Topper";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/room.jpg"
              alt="room"
              width="494"
              height="700"
            />
          </picture>
        </div>
        <div className={styles.content}>
            <Topper text="About Me" />
            <Title title="Coventry's Go-To Painter" />

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={styles.text}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
