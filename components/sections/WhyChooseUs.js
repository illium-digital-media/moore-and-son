import React from 'react';
import Topper from '../Topper/Topper';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const items = [
    {
      iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/award.svg',
      title: '99% winning guarantee',
      description: 'Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.',
    },
    {
      iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/sheild-black.svg',
      title: 'Secure management',
      description: 'Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.',
    },
    {
      iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/call.svg',
      title: 'Full time support',
      description: 'Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.flex}>
            <Topper text='Our Process' />
            <h2 className={styles.title}>Why You Need the Top Lawyers in O’Connor</h2>
          </div>
          <p className={styles.text}>
            We’re a financial and consulting business company of professional thinkers, strategists, digital innovators, designers and problem solvers (everyone gets a mention). Our sense of curiosity brings brands to life, gets them talking, and makes sure they’re heard above.
          </p>
        </div>
        <ul className={styles.cardGroup}>
          {items.map((item, index) => (
            <li className={styles.item} key={index}>
              <img className={styles.icon} aria-hidden="true" loading="lazy" decoding="async" src={item.iconSrc} alt="icon" width="48" height="48" />
              <h3 className={styles.h3}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
