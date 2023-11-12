// import React from "react";
// import styles from "./Navigation.module.css";
// import navigationItems from "../../data/navigation";
// import Link from "next/link";
// import Button from "../Button/Button";
// import Logo from '../../assets/logo.png';
// import newLogo from '../../assets/logo.svg';

// import Image from "next/image";
// import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
// import LogoIcon from "../Icons/Logo";

// const Navigation = () => {
// 	return (
// 		<header className={styles.navigation}>
// 			<div
// 				className={`w-full p-4 flex items-center justify-end ${styles.container}`}
// 			>
// 				{/* Nav Logo */}
// 				<Link href="/" className={styles.logo} aria-label="back to home">
// 					<LogoIcon />
// 				</Link>

// 				{/* Navigation List */}
// 				<nav className={styles.nav} role="navigation">
// 					{/* Mobile Nav Toggle */}
// 					<button className={styles.toggle} aria-label="mobile menu toggle">
// 						<div className={styles.box} aria-hidden="true">
// 							<span
// 								className={`${styles.line} ${styles.line1}`}
// 								aria-hidden="true"
// 							></span>
// 							<span
// 								className={`${styles.line} ${styles.line2}`}
// 								aria-hidden="true"
// 							></span>
// 							<span
// 								className={`${styles.line} ${styles.line3}`}
// 								aria-hidden="true"
// 							></span>
// 						</div>
// 					</button>
// 					{/* Wrapper for Overflow Scroll */}
// 					<div className={styles.ulWrapper}>
// 						<ul
// 							id={styles.expanded}
// 							className={styles.ul}
// 							aria-expanded="false"
// 						>
// 							{navigationItems.map((item, index) => (
// 								<li key={index} className={styles.li}>
// 									<Link href={item.link}>
// 										<span className={styles.liLink}>{item.text}</span>
// 									</Link>
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 				</nav>
// 				<button className={`${styles.buttonSolid} ${styles.navButton}`}>
// 					<Link href="/contact">Get A Quote</Link>
// 				</button>

// 				{/* Uncomment button code for Dark Mode toggle */}
// 				<button id="dark-mode-toggle" aria-label="dark mode toggle">
//           <svg
//             className={styles.moon}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 480 480"
//             // style={{ enableBackground: 'new 0 0 480 480' }}
//             xmlSpace="preserve"
//           >
//             <path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z" />
//           </svg>
//           <img
//             className={styles.sun}
//             aria-hidden="true"
//             src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg"
//             decoding="async"
//             alt="moon"
//             width="15"
//             height="15"
//           />
//         </button>
// 			</div>
// 		</header>
// 	);
// };

// export default Navigation;

import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import React, { useState, useEffect } from "react";
import navigationItems from "../../data/navigation";
import LogoIcon from "../Icons/Logo";
import DarkModeToggle from "./DarkModeToggle";
import Button from "../Button/Button";
import test from '../../assets/test.png';
import Image from "next/image";
import testSvg from '../../assets/test.svg';


const TransparentNavbar: React.FC = () => {
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

	const opacity = navbarVisible ? 1 : 0;

	return (
		<header className={`w-full z-20 ${navbarVisible ? 'fixed bg-white shadow-lg' : 'absolute bg-transparent'}`} >
			<nav className="flex justify-between m-auto max-w-screen-xl px-5 items-center">
				<div className="py-2">
					<Link href="/">
						<div className="">
							<LogoIcon classes="max-md:h-32 max-md:w-32" colour={`${navbarVisible ? 'black' : 'white'}`} />
						</div>
					</Link>
					<Image src={test} alt="" />
					<Image src={testSvg} alt="" />

				</div>

				<div className="flex items-center">
					<ul className={`max-md:hidden menu flex items-center h-full ${navbarVisible ? 'text-black' : 'text-white'}`}>
						{navigationItems.map((item, index) => (
							<NavItem
								key={index}
								pageLink={item.link}
								copy={item.text}
							/>
						))}
					</ul>

				</div>
				<div className="max-md:hidden">
					<Button link="/contact" text="Get a Quote" />
				</div>

				<BurgerMenu />
			</nav>
		</header>
	);
};


const MainNavigation: React.FC = () => {
	return (
		<TransparentNavbar />
	);
};

export default MainNavigation;

