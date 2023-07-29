import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";
import "./FAQ.module.css";

const faqs = [
  {
    question: "What painting and decorating services do you offer?",
    answer:
      "We provide a comprehensive range of services, including interior painting, exterior painting, wallpaper installation, surface preparation, color consultation, and more.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured to ensure the highest level of professionalism and protection for both our clients and our team.",
  },
  {
    question: "How experienced is your team in the industry?",
    answer:
      "Our team boasts [number of years] of experience in the painting and decorating industry, guaranteeing top-notch workmanship on every project.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Absolutely! You can view our portfolio showcasing completed projects and testimonials from satisfied clients.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free estimates for all painting and decorating projects. Contact us to schedule a consultation and receive a detailed quote.",
  },
  {
    question: "What type of paints and materials do you use?",
    answer:
      "We use high-quality paints and materials from reputable brands, ensuring a durable and professional finish for every project.",
  },
  {
    question: "How do you manage project timelines and deadlines?",
    answer:
      "We are committed to meeting project deadlines and providing transparent communication throughout the entire process.",
  },
  {
    question: "Do you offer any warranties for your work?",
    answer:
      "Yes, we stand behind the quality of our work and offer a [number]-year warranty on our painting and decorating services.",
  },
  {
    question: "How do I contact you to discuss my project?",
    answer:
      "You can easily reach us through the contact form on our website or by calling [phone number] to discuss your painting and decorating needs.",
  },
  {
    question: "Do you offer any special promotions or discounts?",
    answer:
      "We occasionally run special promotions and discounts. Check our website or contact us directly for any ongoing offers.",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqItems: FAQItem[];
}

const FAQ: React.FC<FAQProps> = () => {
  const [openItemIndices, setOpenItemIndices] = useState<number[]>([]);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleItem = (index: number) => {
    setOpenItemIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className="max-w-screen-lg m-auto">
      <h3 className="font-bold text-primary text-4xl pb-10 text-center">
        FAQs
      </h3>
      {faqs.map((item, index) => (
        <div key={index} className={`mb-4 rounded-lg shadow-lg bg-primary`}>
          <div
            className={`faq-section ${
              openItemIndices.includes(index) ? "open" : "closed"
            } overflow
w-hidden transition-max-h duration-300`}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div className="flex p-3 justify-between text-white items-center w-full">
                <div className="font-semibold">{item.question}</div>
                <div>{openItemIndices.includes(index) ? "-" : "+"}</div>
              </div>
            </div>

            {openItemIndices.includes(index) && (
              <div
                className={`mt-2 bg-white p-3 rounded-b-lg ${
                  darkMode ? "bg-zinc-500" : "bg-white"
                }`}
              >
                {item.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
