import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Teams } from '../pages/Teams';
import { Players } from '../pages/Players';
import { Matches } from '../pages/Matches';
import { Ranking } from '../pages/Ranking';
import { Statistics } from '../pages/Statistics';
import { DefaultLayout } from '../components/layout/DefaultLayout';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/times' element={<Teams />} />
        <Route path='/jogadores' element={<Players />} />
        <Route path='/partidas' element={<Matches />} />
        <Route path='/classificacao' element={<Ranking />} />
        <Route path='/estatisticas' element={<Statistics />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
};
