import React, { ReactNode, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export type WhyChooseUsItem = {
  title: string;
  content: string;
  image: ReactNode;
};

export const WhyChooseUsCard: React.FC<{ item: WhyChooseUsItem }> = ({
  item,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`max-sm:h-[400px] sm:mx-1 px-5 py-10 max-sm:py-10 max-sm:mb-3 text-center border border-gray-300 rounded-lg mb-4 shadow-lg flex  ${
        darkMode ? "bg-zinc-700" : "bg-white"
      }`}
    >
      <div className="w-full">
        <div className="p-3 shadow-lg rounded-full inline-block overflow-hidden mb-5 bg-white text-primary">
          {item.image}
        </div>
        <h3 className="text-2xl font-semibold pb-2">{item.title}</h3>
        <p>{item.content}</p>
      </div>
    </div>
  );
};
