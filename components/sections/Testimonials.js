import React from 'react';
import Title from '../Title/Title';
import Topper from '../Topper/Topper';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonialsData = [
        {
            starsSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
            text: "Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo",
            name: "Vera Robinson",
            job: "Psychologist"
        },
        {
            starsSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
            text: "Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo",
            name: "Benjamin Norris",
            job: "Business analyst"
        },
        {
            starsSrc: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg",
            text: "Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo",
            name: "Benjamin Norris",
            job: "Business analyst"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                  <Topper text="Our Reviews" />
                  <Title title='What Our Clients Say' />
                    <p className={styles.text}>
                        Vitae ultricies leo integer malesuada nunc vel. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Viverra aliquet eget sit amet tellus cras adipiscing. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit
                    </p>
                </div>
                <ul className={styles.cardGroup}>
                    {testimonialsData.map((testimonial, index) => (
                        <li className={styles.item} key={index}>
                            {/* Blue Quote */}
                            <img className={styles.stars} aria-hidden="true" src={testimonial.starsSrc} decoding="async" alt="quote icon" width="189" height="24" />
                            <p className={styles.itemText}>
                                {testimonial.text}
                            </p>
                            <div className={styles.flexGroup}>
 
                                <span className={styles.name}>
                                    {testimonial.name}
                                    <span className={styles.job}>{testimonial.job}</span>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Testimonials;
