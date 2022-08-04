import { NavLink, Outlet } from 'react-router-dom';
import { LayoutContainer } from './DefaultLayout.styles';

export const DefaultLayout = () => {
	return (
		<LayoutContainer>
			<header>
				<h2>DataSoccer</h2>
				<nav>
					<ul>
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
					</ul>
				</nav>
			</header>

			<Outlet />
		</LayoutContainer>
	);
};
