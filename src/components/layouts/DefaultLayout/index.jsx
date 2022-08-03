import { Outlet } from 'react-router-dom';
import styles from './style.module.css';

export const DefaultLayout = () => {
	return (
		<div className={styles.layout}>
			<header>
				<h2>DataSoccer</h2>
			</header>

			<Outlet />
		</div>
	);
};
