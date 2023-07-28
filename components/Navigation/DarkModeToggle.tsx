import React, { useContext } from "react";
import { DarkModeContext } from '../DarkModeContext'; // update this path to your actual DarkModeContext file location

// Moon icon
const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14.73A9 9 0 1111.27 4 7 7 0 0021 12h-2zm0 0A9 9 0 0112 2a9 9 0 019 9h-2zM12 6v2M12 18v2M4.93 4.93l1.41 1.41M18.66 18.66l1.41 1.41M6 12h2M18 12h2M4.93 19.07l1.41-1.41M18.66 5.34l1.41-1.41"
      />
    </svg>
  );
  
  // Sun icon
  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
  );
  
  const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);  
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center p-2 rounded-full"
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    );
  };

export default DarkModeToggle;
