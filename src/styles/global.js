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

  ::selection {
    background-color: ${props => props.theme['green-300']};
    color: ${props => props.theme['white']};
  }

  ::-webkit-scrollbar {
  width: 4px;
  border-radius: 15px;
  background-color: ${props => props.theme['gray-500']};
}

::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background-color: ${props => props.theme['blue-700']};
}
`;
