import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AnimatedItemContainer = styled.div`
	position: absolute;
	transform-style: preserve-3d;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.5);
`;

export default function AnimatedItem({ x, y, children, moveSpeed, moveDir }) {
	const size = window.innerWidth / 3;

	const rotateX = 70;
	const rotateZ = 25;
	const xSpacing = size * 1.1;
	const ySpacing = size * 1.1;
	const initOffsetY = 1250;
	const initOffsetX = 0;

	const [yPos, setYPos] = useState(y);

	useEffect(() => {
		const interval = setInterval(() => {
			if (moveDir === "up") {
				if (yPos < -10) {
					setYPos(0);
				} else {
					setYPos(yPos - moveSpeed);
				}
			} else {
				if (yPos > 0) {
					setYPos(-10);
				} else {
					setYPos(yPos + moveSpeed);
				}
			}
		}, 16);
		return () => clearInterval(interval);
	});

	let style = {
		width: size,
		height: size,
		borderRadius: 10,
		transform: `
          perspective(200vw) 
          rotateX(${rotateX}deg) 
          rotateZ(${rotateZ}deg) 
          translate(${initOffsetX + x * xSpacing}px, ${initOffsetY + yPos * ySpacing}px)
        `,
	};
	return <AnimatedItemContainer style={style}>{children}</AnimatedItemContainer>;
}
