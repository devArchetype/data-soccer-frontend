import styled from 'styled-components';

export const HeaderContainer = styled.header `
	width: 100%;
	color: ${(props) => props.theme['white']};
	background-color: ${(props) => props.theme['green-300']};

	h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: ${(props) => props.theme['white']};
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
`;

export const NavLinksList = styled.ul `
	display: flex;
	align-items: center;
	gap: 1rem;
	list-style: none;

	a {
		display: inline-block;
		position: relative;
		padding: 5px 0;
		font-size: 1.1rem;
		font-weight: 500;
		text-decoration: none;
		-webkit-text-fill-color: transparent;
		transition: 0.4s;
		background-image: linear-gradient(to right, 
			${(props) => props.theme['blue-700']} 50%, 
			${(props) => props.theme['white']} 50%);
		background-size: 200% 100%;
		background-position: -100%;
		-webkit-background-clip: text;

		&::after{
			content: '';
			width: 0;
			height: 2px;
			display: block;
			position: absolute;
			transition: 0.4s;
			background-color: ${(props) => props.theme['blue-700']};
		}

		&.active,
		&:hover {
			background-position: 0;

			&::after{
				width: 100%;
			}
		}

	}
`;