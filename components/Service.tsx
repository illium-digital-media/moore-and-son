import Link from 'next/link';
import React from 'react';
import styles from './Service.module.css';
import Title from './Title/Title';
import Topper from './Topper/Topper';
import Image from 'next/image';
import RightChevron from './Icons/RightChevron';
import Button from './Button/Button';

const Service: React.FC<{ topper: string, title: string, content: string, bulletPoints: string[], images: string[] }> = (props) => {
  return (
    <section className={`p-section ${styles.section}`}>
      <div className={`w-full max-w-xl m-auto flex flex-col items-center gap-12 lg:gap-16 lg:max-w-7xl lg:flex-row lg:justify-between ${styles.container}`}>
        <div className={`text-left max-w-lg flex flex-col items-start lg:w-1/2 ${styles.content}`}>
          <Topper text={props.topper} />
          <Title title={props.title} />
          <p className={`mb-8 ${styles.text}`}>
            {props.content}
          </p>
          <ul className="flex flex-wrap -mx-2 mb-10">
            {props.bulletPoints.map((point, index) => (
              <li key={index} className="w-1/2 px-2">
                <div className='flex items-center mb-2'>
                  <RightChevron />
                  <span className='ml-2'>{point}</span>
                </div>
              </li>
            ))}
          </ul>
          <Button link='/contact' text='Get a Quote' />
        </div>
        <div className={`h-[38em] mt-[4rem] relative -order-1 w-[35.5em] -translate-x-2 before:content-[''] before:w-[20em] before:h-[20em] before:bg-primary before:opacity-100 before:absolute before:block before:-top-[2em] before:-right-[2.3em] lg:mr-16 lg:order-2 text-[min(2.3vw,_0.8em)] lg:text-[min(1.1vw,_1em)] ${styles.imageGroup}`}>
          {/* Large Image */}
          <picture className={`block absolute w-[30em] h-[34em] top-0 right-0 ${styles.picture} ${styles.pictureLarge}`}>
            {/* <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/SideBySide/lab1-m.jpg"
          /> */}
            <Image
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src={props.images[1]}
              alt="painting and decorating work"
              width="334"
              height="380"
              className='absolute top-0 left-0 h-full w-full object-cover'

            />
          </picture>
          {/* Small Image */}
          <picture className={`block absolute w-[16em] h-[14em] bg-white bottom-0 left-0 border-white border-[0.625em] ${styles.picture} ${styles.pictureSmall}`}>
            <Image
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src={props.images[0]}
              alt="painting and decorating work"
              width="183"
              height="158"
              className='absolute top-0 left-0 h-full w-full object-cover'
            />

          </picture>
        </div>
      </div>

    </section>
  );
};

export default Service;
