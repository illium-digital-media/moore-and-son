import { DarkModeContext } from '../DarkModeContext';
import React, { useContext } from 'react';

const BurgerMenuIcon: React.FC<{ colour: string }> = (props) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {[...Array(3)].map((_, index) => (
        <span key={index} className={`block h-0.5 w-8 ${props.colour}`}
        />
      ))}
    </>
  );
};

export default BurgerMenuIcon;
