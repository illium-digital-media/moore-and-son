import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import React, { useState, useEffect } from "react";
import navigationItems from "../../data/navigation";
import LogoIcon from "../Icons/Logo";
import Button from "../Button/Button";
import { navbarActions } from '../../store/slices/navbarslice';
import { useSelector, useDispatch } from 'react-redux';



const TransparentNavbar: React.FC = () => {
	const [navbarVisible, setNavbarVisible] = useState(false);
	const dispatch = useDispatch();
	const toggleNavbarHandler = (visible: boolean) => {
		dispatch(navbarActions.toggle(visible));
	}


	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setNavbarVisible(true);
				toggleNavbarHandler(true);
			} else {
				setNavbarVisible(false);
				toggleNavbarHandler(false);
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
							<LogoIcon classes="max-md:h-28 max-md:w-28" colour={`${navbarVisible ? 'black' : 'white'}`} />
						</div>
					</Link>
				</div>

				<div className="flex items-center">
					<ul className={`max-md:hidden menu flex items-center h-full gap-8 ${navbarVisible ? 'text-black' : 'text-white'}`}>
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

