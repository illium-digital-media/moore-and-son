import React from 'react';

interface SectionProps {
    children: React.ReactNode;
  }
  
const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className='py-20 max-lg:py-10'>{children}</section>;
};

export default Section;