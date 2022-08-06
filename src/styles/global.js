import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-size: 62.5%;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		color: ${props => props.theme['blue-700']};
		-webkit-font-smoothing: antialiased;
		background-color: ${props => props.theme['gray-500']};
	}
`;
