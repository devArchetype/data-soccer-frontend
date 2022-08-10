import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { Teams } from '../pages/Teams';
import { Players } from '../pages/Players';
import { Matches } from '../pages/Matches';
import { Ranking } from '../pages/Ranking';
import { Statistics } from '../pages/Statistics';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/times' element={<Teams />} />
				<Route path='/times/:teamID/:teamName/jogadores' element={<Players />} />
				<Route path='/partidas' element={<Matches />} />
				<Route path='/classificacao' element={<Ranking />} />
				<Route path='/estatisticas' element={<Statistics />} />
				<Route path='*' element={<Home />} />
			</Route>
		</Routes>
	);
};
