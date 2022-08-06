import { NavLink } from 'react-router-dom';
import { MenuContainer, MenuItem } from './styles';

export const Menu = ({ isVisible, isDesktop }) => {

	return (
		<MenuContainer isVisible={isVisible} isDesktop={isDesktop}>
			<MenuItem>
				<NavLink to='/'>Início</NavLink>
			</MenuItem>
			<MenuItem>
				<NavLink to='/classificacao'>Classificação</NavLink>
			</MenuItem>
			<MenuItem>
				<NavLink to='/partidas'>Partidas</NavLink>
			</MenuItem>
			<MenuItem>
				<NavLink to='/times'>Times</NavLink>
			</MenuItem>
			<MenuItem>
				<NavLink to='/estatisticas'>Estatísticas</NavLink>
			</MenuItem>
		</MenuContainer>
	);
};
