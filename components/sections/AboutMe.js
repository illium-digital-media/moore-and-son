import React from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.topper}>Why Choose Us</span>
                    <h2 className={styles.title}>Expert House Cleaning Service Can Trust</h2>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in. Diam ut venenatis tellus in metus vulputate eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in. Diam ut venenatis tellus in metus vulputate eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac.
                    </p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in. Diam ut venenatis tellus in metus vulputate eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac.
                    </p>
                    <a href="" className={styles.buttonSolid}>Discover More</a>
                </div>
                {/* Left Image Group */}
                <div className={styles.imageGroup}>
                    {/* Seeds */}
                    <img className={styles.graphic1} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/seeds.svg" aria-hidden="true" loading="lazy" decoding="async" alt="seeds" width="134" height="137" />

                    {/* Green SVG Shape */}
                    <img className={styles.graphic2} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/green-line.svg" aria-hidden="true" loading="lazy" decoding="async" alt="blob icon" width="514" height="341" />

                    {/* Image Mask */}
                    <svg className={styles.mask} width="557" height="697" viewBox="0 0 557 697" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M245.655 0.445338L0.319093 0.445349L0.319092 488.452C0.320596 471.266 3.43365 454.309 9.82481 438.817C17.8984 419.208 30.8794 402.497 48.2795 392.275C64.8624 382.526 84.3581 380.036 103.501 383.382C117.87 382.082 132.587 383.04 147.197 384.919C156.577 386.127 165.947 387.655 175.318 389.183C180.003 389.947 184.689 390.711 189.375 391.435C202.46 393.482 215.669 395.067 228.604 393.483C242.648 391.738 255.604 386.37 266.889 377.823C271.626 374.242 276.136 370.348 280.643 366.457C287.183 360.812 293.717 355.171 300.931 350.493C320.504 337.786 344.823 331.621 368.03 329.86C411.468 326.549 459.394 339.439 493.506 373.975C510.159 390.836 522.016 412.54 527.791 435.912C534.468 462.993 532.807 491.111 528.127 517.418C519.403 566.472 494.937 608.931 459.441 638.692C441.636 653.624 421.648 665.411 400.562 674.469C378.819 683.813 355.388 691.374 331.807 694.77C305.106 698.629 277.23 694.147 250.445 687.442C229.217 682.131 208.285 675.205 187.347 668.278C181.388 666.306 175.428 664.334 169.461 662.399C143.595 654.015 117.992 643.706 93.7924 629.84C69.749 616.037 46.3412 598.674 28.9041 575.362C10.1622 550.316 0.321767 519.036 0.319092 488.477L0.319092 696.583L557 696.583L557 214.589C556.06 227.155 553.393 239.459 548.92 251.004C541.272 270.79 528.655 287.79 511.479 298.402C495.111 308.523 475.674 311.453 456.464 308.54C442.125 310.163 427.391 309.538 412.744 307.989C403.341 306.993 393.939 305.677 384.538 304.361C379.837 303.703 375.137 303.045 370.436 302.427C357.31 300.676 344.071 299.389 331.172 301.264C317.169 303.326 304.333 308.985 293.235 317.784C288.577 321.472 284.152 325.466 279.729 329.458C273.313 335.249 266.902 341.037 259.791 345.876C240.497 359.022 216.317 365.734 193.153 368.018C149.798 372.309 101.605 360.503 66.756 326.746C49.743 310.264 37.4208 288.833 31.1429 265.597C23.8829 238.674 24.9368 210.525 29.0481 184.118C36.712 134.879 60.2554 91.8784 95.101 61.3236C112.579 45.9939 132.308 33.7589 153.194 24.2275C174.73 14.3944 197.992 6.3063 221.493 2.37912C229.448 1.04592 237.523 0.455287 245.655 0.445338ZM246.074 0.445338C265.013 0.468469 284.256 3.62478 302.994 7.8699C324.331 12.7005 345.407 19.1519 366.489 25.6052C372.49 27.442 378.491 29.279 384.499 31.0788C410.539 38.8767 436.358 48.6057 460.851 61.9227C485.187 75.1791 508.963 92.0097 526.899 114.923C544.621 137.553 554.936 165.62 557 193.739L557 0.445324L246.074 0.445338Z" fill="#FFFBEF" />
                    </svg>

                    {/* Main Person Image */}
                    <picture className={styles.picture}>
                        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids.jpg" />
                        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids.jpg" />
                        <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids.jpg" alt="kids" width="554" height="693" aria-hidden="true" />
                    </picture>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
