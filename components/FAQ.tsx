// src/components/FAQ.tsx

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqItems: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqItems }) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqItems.map((item, index) => (
        <div key={index} className="border-b mb-4 pb-2">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="font-semibold">{item.question}</div>
            <div>{openItemIndex === index ? '-' : '+'}</div>
          </div>
          {openItemIndex === index && <div className="mt-2">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
