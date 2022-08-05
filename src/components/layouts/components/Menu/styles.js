import styled, { css } from 'styled-components';

export const MenuContainer = styled.ul `
  width: min(70vw, 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
	align-items: center;
	gap: 1rem;
  position: fixed;
  inset: ${({ isVisible }) => isVisible ? '0 0 0 auto' : 'auto -100% 0 auto'};
  z-index: 10;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  padding: 70px 1rem 1rem;
  transition: 0.4s;
	list-style: none;
  border-radius: 15px 0 0 15px;
  background-color: ${(props) => props.theme['green-400']};

  ${({ isDesktop }) => isDesktop && css`
    width: auto;
    height: auto;
    flex-direction: row;
    position: static;
    padding: 0;
    background-color: transparent;
  `};
`;

export const MenuItem = styled.li `
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
