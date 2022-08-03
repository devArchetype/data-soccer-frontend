import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
	return (
		<div>
			<header>
				<h2>Nao altera</h2>
			</header>
			<Outlet />

			<footer>
				<h3>footer</h3>
			</footer>
		</div>
	);	
}