import React, { useState, useEffect, useRef, useContext } from "react";
import CloseButton from "./CloseButton";
import NavItem from "./Navigation/NavItem";
import BurgerMenuIcon from "./Icons/BurgerMenuIcon";
import { DarkModeContext } from './DarkModeContext';
import NavItems from "./Navigation/NavItem copy";
import navigationItems from "../data/navigation";



const BurgerMenu: React.FC = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setNavbarVisible(true);
			} else {
				setNavbarVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? "auto" : "hidden";
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsNavOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (isNavOpen) {
      // Add the event listener when the navigation is open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when the navigation is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or the state changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]); // Adding isNavOpen as a dependency

  return (
    <div className="flex items-center lg:justify-between p-3 md:hidden">
      {isNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-5" onClick={toggleNav}></div>
      )}
      <nav>
        <section className="flex lg:hidden">
          <div className="space-y-2 cursor-pointer" onClick={toggleNav}>
            <BurgerMenuIcon colour={navbarVisible ? 'bg-black' : 'bg-white'} />
          </div>
          <div
            ref={menuRef}
            className={`menu-nav z-10 flex flex-col transition-left duration-300 ease-in-out absolute w-2/4 h-screen top-0 -left-3/4 shadow-lg ${isNavOpen ? "left-0" : ""
              } ${darkMode ? 'bg-zinc-800' : 'bg-white'}`}
          >
            <div className="top-0 p-3">
              <CloseButton handleClose={toggleNav} />
            </div>
            <ul className="flex flex-col min-h-[250px]">
              {navigationItems.map((item, index) => (
                <NavItems
                  key={index}
                  pageLink={item.link}
                  copy={item.text}
                  handleClick={toggleNav}
                />
              ))}
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default BurgerMenu;



// import React, { useState, useEffect, useRef } from "react";
// import CloseButton from "./CloseButton";
// import NavItem from "./Navigation/NavItem";
// import BurgerMenuIcon from "./Icons/BurgerMenuIcon";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from '../assets/full-logo.svg';
// import navigationItems from "../../data/navigation";


// const BurgerMenu: React.FC = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   const toggleNav = () => {
//     setIsNavOpen(prevState => !prevState);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 640) { // Adjust the breakpoint as needed
//         setIsNavOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isNavOpen ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto"; 
//     };
//   }, [isNavOpen]);

//   return (
//     <div className="flex items-center sm:justify-between sm:hidden">
//       <nav>
//         <section className="flex">
//           <div onClick={toggleNav}>
//             <BurgerMenuIcon colour="bg-white"/>
//           </div>

//           <div
//             ref={menuRef}
//             className={`z-10 flex flex-col transition-opacity duration-500 ease-in-out fixed w-full h-screen top-0 right-0 bg-gradient-to-r from-secondary via-tertiary to-secondary ${isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//           >
//             <div className="flex px-5 py-2 justify-between">
//               <Link href="/">
//                 <Image src={Logo} alt="Logo Placeholder" />
//               </Link>
//               <CloseButton handleClose={toggleNav} />
//             </div>

//             <div className="flex flex-col pt-10">
//               {navigationItems.map((item, index) => (
//                 <NavItem
//                   key={index}
//                   pageLink={item.pageLink}
//                   copy={item.title}
//                   handleClick={toggleNav}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </nav>
//     </div>
//   );
// };

// export default BurgerMenu;


