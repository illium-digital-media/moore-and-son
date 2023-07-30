import React from "react";

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`p-6 uppercase font-bold border-r-2 border-black border-opacity-10 w-1/3 flex-1 ${
        active ? "bg-primary text-white" : "bg-gray-100 text-black"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
