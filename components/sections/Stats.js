import React from 'react';
import styles from './Stats.module.css'; // Import the CSS module

const Stats = () => {
    const statsData = [
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/person2-gold.svg', number: '5840', desc: 'Cleaning Staff' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/mop-gold.svg', number: '3140', desc: 'Projects Completed' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/thumbs-gold.svg', number: '2260', desc: 'Satisfied Clients' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/award2-gold.svg', number: '2365', desc: 'Awards Won' },
    ];

    return (
        <div className={styles.div}>
            <ul className={styles.cardGroup}>
                {statsData.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <picture className={styles.picture}>
                            <img className={styles.icon} src={item.iconSrc} alt="icon" width="40" height="40" loading="lazy" decoding="async" aria-hidden="true" />
                        </picture>
                        <div className={styles.flexGroup}>
                            <span className={styles.number}>{item.number}</span>
                            <span className={styles.desc}>{item.desc}</span>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Background Image */}
            <picture className={styles.background}>
                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Stats/cleaning-products-m.jpg" />
                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Stats/cleaning-products.jpg" />
                <img aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Stats/cleaning-products.jpg" alt="cleaning products" width="1920" height="283" />
            </picture>
        </div>
    );
}

export default Stats;
