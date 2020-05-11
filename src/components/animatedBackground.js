import React from "react";

import AnimatedTile from "./animatedTile";
import styled from "styled-components";

const AnimatedBGContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100vw;
	height: ${(props) => props.height || "90vh"};
	background-color: transparent;
	overflow: hidden;
`;

const generate3dAnimatedTiles = (x, y, options) => {
	const tiles = [];

	for (let i = 0; i < x; i++) {
		let row = [];

		let rowMoveDir = i % 2 === 0 ? "up" : "down";
		let rowMoveSpeed = 0.00025;

		for (let j = 0; j < y; j++) {
			let x = i;
			let y = -j;

			let randomVal = options[Math.floor(Math.random() * options.length)];

			row.push(
				<AnimatedTile x={x} y={y} moveDir={rowMoveDir} moveSpeed={rowMoveSpeed}>
					{randomVal}
				</AnimatedTile>,
			);
		}
		tiles.push(row);
	}

	return tiles;
};

export default function AnimatedBackground({ type }) {
	const options = ["JavaScript", "HTML", "CSS", "React", "React Native"];

	const tiles = generate3dAnimatedTiles(3, 10, options);

	return (
		<AnimatedBGContainer height={"100vh"}>
			{tiles.map((tile, i) => {
				return tile;
			})}
		</AnimatedBGContainer>
	);
}
