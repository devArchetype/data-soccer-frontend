import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderLimiter, NavLinksList } from './styles';

export const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLimiter>
				<h2>DataSoccer</h2>
				<nav>
					<NavLinksList>
						<li>
							<NavLink to='/classificacao'>Classificação</NavLink>
						</li>
						<li>
							<NavLink to='/partidas'>Partidas</NavLink>
						</li>
						<li>
							<NavLink to='/times'>Times</NavLink>
						</li>
						<li>
							<NavLink to='/estatisticas'>Estatísticas</NavLink>
						</li>
					</NavLinksList>
				</nav>
			</HeaderLimiter>
		</HeaderContainer>
	);
};
