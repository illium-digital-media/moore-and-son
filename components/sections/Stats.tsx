import React from 'react';
import StatsBgWEBP from '../../assets/stats-bg.webp'
import StatsBg from '../../assets/stats-bg.jpg';
import Image from 'next/image';

const Stats = () => {
    const statsData = [
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/person2-gold.svg', number: '15+', desc: 'Years in Business' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/mop-gold.svg', number: '3000+', desc: 'Projects Completed' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/thumbs-gold.svg', number: '2700+', desc: 'Satisfied Clients' },
        { iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/award2-gold.svg', number: '85%', desc: 'Repeat Business Rate' },
    ];

    return (
        <div className={`p-section relative z-10`}>
            <ul className={`w-full max-w-[15rem] sm:max-w-xl m-auto p-0 flex flex-col justify-center items-start sm:items-center flex col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-16 lg:flex-nowrap lg:justify-evenly lg:max-w-7xl`}>
                {statsData.map((item, index) => (
                    <li className={`flex justify-start items-start sm:items-center`} key={index}>
                        <picture className={`mr-4 flex rounded-full justify-center items-center border-box w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-gray-300 flex-none`}>
                            <source srcSet={StatsBgWEBP.src} type="image/webp" />
                            <Image className={`w-7 sm:w-auto md:w-10`} src={item.iconSrc} alt="icon" width="40" height="40" loading="lazy" decoding="async" aria-hidden="true" />
                        </picture>
                        <div className={`flex justify-center items-start flex-col`}>
                            <span className={`text-2xl md:text-3xl lg:text-5xl text-white font-black leading-12 block`}>{item.number}</span>
                            <span className={`text-white block max-sm:text-sm`}>{item.desc}</span>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Background Image */}
            <picture className={`w-full h-full absolute top-0 left-0 block -z-10 bg-black`}>
                <Image aria-hidden="true" loading="lazy" decoding="async" src={StatsBg} alt="Painting Products" width="1920" height="283" className='absolute top-0 left-0 w-full h-full opacity-20 object-cover' />
            </picture>
        </div>
    );
}

export default Stats;
