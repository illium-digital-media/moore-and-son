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

  const path = router.pathname.replace('/', '');
  const link = props.pageLink.replace('/', '');
  const isActive = (path.length === 0 && link.length === 0) || (link.length !== 0 && path.includes(link));

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
    <li className="px-4 md:px-0">
      <Link className={`pb-1 hover:before:w-full before:duration-300 before:content-[''] ${isActive ? 'before:w-full' : 'before:w-0' }  before:h-[0.2rem] before:opacity-100 before:block before:absolute before:bottom-0 before:left-0 md:m-auto list-none text-base duration-200 relative ${isActive ? (windowWidth <= 767 ? 'before:bg-primary text-primary font-bold' : (navbarVisible ? 'before:bg-primary text-primary font-bold' : 'before:bg-white font-bold')) : ''} ${navbarVisible || windowWidth <= 767? 'before:bg-primary hover:text-primary' : 'before:bg-white '}`} href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
