import styled from "styled-components";

export const Section = styled.section`
	z-index: 1;
	height: ${(props) => props.height || "90vh"};
	width: 100vw;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid ${(props) => props.borderColor || "red"};
`;
