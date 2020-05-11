import React, { useState, useEffect, useLayoutEffect } from "react";

import { AnimatedNavButton } from "./shared/buttons";
import styled, { withTheme } from "styled-components";

import hamburgerImg from "../assets/hamburger.svg";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const NavBarContainer = styled.div`
	margin: 0;
	padding: 0;
	background-color: rgba(0, 0, 0, 255);
	width: 100vw;
	height: ${(props) => props.height || "10vh"};
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	display: flex;
	z-index: 999;
	align-items: center;
`;

const Hamburger = styled.img`
	width: 35px;
	margin: 7.5px 10px;
	position: absolute;
	right: 0;
	top: 0;
`;

const MobileButtonContainer = styled.div`
	position: absolute;
	top: 50px;
	display: flex;
	flex-direction: column;
	width: 100vw;
`;

const ButtonContainer = ({ children }) => {
	const animationIn = { scale: [0, 1.2, 1], backgroundColor: "rgba(255,255,255,0.6)" };
	const animationOut = { scale: [1, 1.2, 0], backgroundColor: "rgba(255,255,255,0)" };
	useEffect(() => {
		return console.log("unmounted");
	});
	return (
		<MobileButtonContainer>
			<motion.div
				key="im so fancy"
				animate={animationIn}
				exit={animationOut}
				transition={{ duration: 0.2 }}
				style={{ height: "100%", width: "100%" }}
			>
				{children}
			</motion.div>
		</MobileButtonContainer>
	);
};

const ButtonsList = ({ pages, buttonClicked, isMobile }) => {
	const buttonsUI = pages.map((page, i) => {
		return (
			<AnimatedNavButton key={`navbtn-${page + i}`} onClick={() => buttonClicked(page.name)}>
				{page.title}
			</AnimatedNavButton>
		);
	});
	if (isMobile) {
		return <ButtonContainer>{buttonsUI}</ButtonContainer>;
	}

	return buttonsUI;
};

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

const Nav = React.forwardRef(({ pages, buttonClicked }, ref) => {
	const [wWidth, wHeight] = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(wWidth < 600);
	useEffect(() => {
		setIsMobile(wWidth < 600);
	}, [wWidth]);
	return (
		<NavBarContainer height={isMobile ? "50px" : null} ref={ref}>
			{isMobile ? (
				<>
					<Hamburger
						onClick={() => {
							setIsOpen(!isOpen);
						}}
						src={hamburgerImg}
					></Hamburger>
					{isOpen ? (
						<AnimatePresence>
							<ButtonsList
								pages={pages}
								buttonClicked={(page) => buttonClicked(page)}
								isMobile
							/>
						</AnimatePresence>
					) : null}
				</>
			) : (
				<>
					<ButtonsList
						pages={pages}
						buttonClicked={(page) => {
							buttonClicked(page);
						}}
					/>
				</>
			)}
		</NavBarContainer>
	);
});

export default Nav;
