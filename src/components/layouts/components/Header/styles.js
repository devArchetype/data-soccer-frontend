import styled from 'styled-components';

export const HeaderContainer = styled.header `
	width: 100%;
  position: relative;
  z-index: 9;
	color: ${(props) => props.theme['white']};
	background-color: ${(props) => props.theme['green-300']};

	h2 a {
		font-size: 1.5rem;
		font-weight: 700;
		color: ${(props) => props.theme['white']};
    text-decoration: none;
	}
`;

export const HeaderLimiter = styled.div `
	width: 100%;
	max-width: 1280px;
	height: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 1rem;

  & nav button {
    position: relative;
	  z-index: 11;
  }
`;
