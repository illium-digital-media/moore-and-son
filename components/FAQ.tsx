import React, { useState, useRef, useContext } from "react";
import { faqs } from "@/data/faq";
import { DarkModeContext } from "./DarkModeContext";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const { darkMode } = useContext(DarkModeContext);

  const contentSpace = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setIsActive(!isActive);
    setHeight(isActive ? "0px" : `${contentSpace.current?.scrollHeight}px`);
  }

  return (
    <div className="cursor-pointer mb-2 shadow-lg rounded-lg">
      <div
        className={`flex bg-primary text-white py-2 px-3 ${
          isActive ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <button onClick={toggleAccordion} className={` w-full text-left`}>
          {question}
        </button>
        <span className="float-right">{isActive ? "-" : "+"}</span>
      </div>

      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div
          className={`p-2 bg-white rounded-b-lg ${
            darkMode ? "bg-zinc-700" : "bg-white"
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQList: React.FC = () => {
  return (
    <div className="max-w-screen-lg m-auto px-3">
      <div className="text-center">
        <h3 className="font-bold text-4xl pb-10">FAQs</h3>
      </div>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
