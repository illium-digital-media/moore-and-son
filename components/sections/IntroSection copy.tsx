import React, { useState, useContext } from "react";
import ResidentialTab from "../Home/ServicesTab/ResidentialTab";
import ExteriorTab from "../Home/ServicesTab/ExteriorTab";
import CommercialTab from "../Home/ServicesTab/CommercialTab";
import TabButton from "../TabButton";
import { DarkModeContext } from "../DarkModeContext";

interface TabData {
  label: string;
  content: React.ReactNode;
}

const tabData: TabData[] = [
  {
    label: "Residential",
    content: <ResidentialTab />,
  },
  {
    label: "Commercial",
    content: <CommercialTab />,
  },
  {
    label: "Exterior",
    content: <ExteriorTab />,
  },
];

const IntroSection2: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const changeTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="max-w-screen-sm m-auto max-sm:mx-4 border-2 border-gray-200">
      <div className="flex text-sm max-sm:text-[10px]">
        {tabData.map((tab, index) => (
          <TabButton
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => changeTab(index)}
          />
        ))}
      </div>
      <div
        className={`text-base p-5 ${
          darkMode ? "bg-zinc-600" : "bg-white"
        }`}
      >
        {tabData[activeTab].content}
      </div>
    </div>
  );
};

export default IntroSection2;
