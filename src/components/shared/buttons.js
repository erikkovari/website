import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

export const Button = styled.div`
	display: inline-block;

	padding: 1rem 2rem;
	margin: 0;
	text-decoration: none;
	background: transparent;
	color: #ffffff;
	border: 2px solid white;
	border-radius: 1rem;
`;

const StyledNavbutton = styled.div`
	border-radius: 0;
	border: 0px solid black;
	display: inline-block;
	padding: 1rem 2rem;
	margin: 0;

	:hover {
		background-color: var(--primary-color);
	}
`;

export const AnimatedNavButton = (props) => {
	let animation = useAnimation();
	let trans = {
		scale: [0.8, 1],
		transition: { duration: 0.15 },
	};
	return (
		<motion.div animate={animation}>
			<StyledNavbutton
				{...props}
				onClick={() => {
					props.onClick();
					animation.start(trans);
				}}
			/>
		</motion.div>
	);
};
