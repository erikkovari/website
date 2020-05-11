import React from "react";

import scrollImg from "../assets/down-arrow.svg";
import styled from "styled-components";
import { Button } from "../components/shared/buttons";
import { Section } from "../components/shared/elements";
import AnimatedBackground from "../components/animatedBackground";

const TitleContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 2em;
`;

const Title = styled.div`
	display: inline-block;
	font-size: var(--large-size);
	color: #fff;

	max-width: 30rem;
	margin-bottom: 1rem;
`;

const TitlePrimary = styled(Title)`
	color: var(--primary-color);
	font-weight: bold;
`;

const Text = styled.div`
	font-size: var(--medium-size);
	font-weight: normal;
`;

const CTA = styled.img`
	margin-top: 1rem;
	height: 2rem;
	filter: invert(100%);
`;

//todo: context to scroll for the button

const Home = React.forwardRef((props, ref) => {
	return (
		<Section height={"100vh"} ref={ref} borderColor={"blue"}>
			<AnimatedBackground height={"100vh"} />
			<TitleContainer>
				<Title>
					Hi, I'm <TitlePrimary>Erik Kovari</TitlePrimary>.
				</Title>
				<Title>
					I like to solve the problems of <TitlePrimary>today</TitlePrimary> and{" "}
					<TitlePrimary>tomorrow</TitlePrimary>.
				</Title>
			</TitleContainer>
			<Button onClick={() => props.navigate("about-me")}>
				<Text>Take a look</Text>
				<CTA src={scrollImg} />
			</Button>
		</Section>
	);
});

export default Home;
