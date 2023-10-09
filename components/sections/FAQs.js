import React from 'react';
import styles from './FAQs.module.css'; // Import your CSS module here

function FAQs() {
  const faqItems = [
    {
      question: 'Can you help me?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.',
    },
    {
      question: 'How long will it take?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.',
    },
    {
      question: 'How much will it cost?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.',
    },
    {
      question: 'Covered by insurance?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.',
    },
    {
      question: 'How long are the appointments?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>FAQ’s</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur veritatis quae explicabo a quia veniam temporibus aliquid? Quos maiores architecto a officia aliquid atque reiciendis quae? Voluptas maxime sit quae!
          </p>
        </div>
        <div className={styles.flexGroup}>
          <ul className={styles.faqGroup}>
            {faqItems.map((item, index) => (
              <li className={styles.faqItem} key={index}>
                <button className={styles.button}>{item.question}</button>
                <p className={styles.itemP}>{item.answer}</p>
              </li>
            ))}
          </ul>
          <div className={styles.cta}>
            <h3 className={styles.h3}>Don’t see the answer you need?</h3>
            <p className={styles.ctaP}>
              That’s ok. Just drop a message and we will get back to you ASAP.
            </p>
            <a href="" className={styles.solidButton}>Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
