import React from 'react';
import styles from './Stats.module.css'; // Import the CSS module
import StatsBg from '../../assets/stats-bg.jpg'
import Image from 'next/image';

const Stats = () => {
    const statsData = [
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/person2-gold.svg', number: '15+', desc: 'Years in Business' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/mop-gold.svg', number: '5000+', desc: 'Projects Completed' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/thumbs-gold.svg', number: '4500+', desc: 'Satisfied Clients' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/award2-gold.svg', number: '85%', desc: 'Repeat Business Rate' },
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
                <Image aria-hidden="true" loading="lazy" decoding="async" src={StatsBg} alt="Painting Products" width="1920" height="283" />
            </picture>
        </div>
    );
}

export default Stats;
