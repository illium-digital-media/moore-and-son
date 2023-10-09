import React from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    quoteIcon: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/quote-blue.svg',
    reviewText: 'I have used CleanPro service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
    name: 'John Doe',
    jobTitle: 'Chief Executive',
  },
  {
    id: 2,
    quoteIcon: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/quote-blue.svg',
    reviewText: 'I have used CleanPro service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
    name: 'Robert Henrich',
    jobTitle: 'CEO, HK Traders',
  },
  {
    id: 3,
    quoteIcon: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/quote-blue.svg',
    reviewText: 'I have used CleanPro service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
    name: 'Robert Henrich',
    jobTitle: 'CEO, HK Traders',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>Testimonials</span>
          <h2 className={styles.title}>Trusted by Thousand of People & Companies</h2>
          <p className={styles.text}>
            At Stitch Cleaning Service, let us help you solve problems so that you can focus on your mission. We support businesses through periods of expansion, succession.
          </p>
        </div>
        <ul className={styles.cardGroup}>
          {testimonialsData.map((testimonial) => (
            <li key={testimonial.id} className={styles.item}>
              <img className={styles.quote} aria-hidden="true" src={testimonial.quoteIcon} decoding="async" alt="quote icon" width="40" height="33" />
              <p className={styles.review}>{testimonial.reviewText}</p>
              <span className={styles.name}>{testimonial.name}</span>
              <span className={styles.job}>{testimonial.jobTitle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
