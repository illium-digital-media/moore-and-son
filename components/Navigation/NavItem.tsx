import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import { NavbarState } from '../../store/slices/navbarslice';
import React, { useState, useEffect, useRef, useContext } from "react";


const NavItem: React.FC<{
  pageLink: string;
  handleClick?: () => void;
  copy: string;
}> = (props) => {
  const navbarVisible = useSelector((state: NavbarState) => state.navbarVisible);
  const router = useRouter();
  const isActive = router.pathname === props.pageLink;

  const [windowWidth, setWindowWidth] = useState(Number);

  useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
          // Set window width to state
          setWindowWidth(window.innerWidth);
      }
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <li className={`py-3 md:m-auto px-5 list-none text-base duration-200 relative ${isActive ? (windowWidth <= 767 ? 'text-primary font-bold' : (navbarVisible ? 'text-primary font-bold' : 'text-primaryLight font-bold')) : ''} ${navbarVisible || windowWidth <= 767? 'hover:text-primary' : 'hover:text-primaryLight'}`}>
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
