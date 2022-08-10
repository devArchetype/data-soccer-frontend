import { ContentContainer } from '../components/ContentContainer';
import { MatchesContainer, PageContainer } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Footer } from '../components/Footer';
import { Round } from './components/Round';

import { Input } from '../../components/Input';
import { useEffect, useState } from 'react';

export const Matches = () => {
	const [roundsData, setRoundsData] = useState([]);
	const [roundFilter, setRoundFilter] = useState('');

	const filteredRound = roundFilter
		? roundsData.filter((round) => round[0] === roundFilter)
		: [];

	useEffect(() => {
		fetch('https://datasoccer.000webhostapp.com/getMatches.php')
			.then((response) => response.json())
			.then((data) => setRoundsData(Object.entries(data.data)));
	}, []);

	const handleFilterInput = (event) => {
		setRoundFilter(event.target.value);
	};

	const query = [
		{
			label: 'Teste Query',
			code: `SELECT Time.nome, COUNT(*) AS "Quantas vezes ganhou"
      FROM Time
      INNER JOIN Disputa
      ON Disputa.clube_id_mandante = Time.id_clube
      WHERE Disputa.gols_mandante > Disputa.gols_visitante
      AND Time.nome like 'Arsenal FC'
      GROUP BY Time.nome;`
		}
	];

	return (
		<ContentContainer>
			<PageContainer>
				<FilterLeague label="Partidas" modalCodes={query}/>
				<Input
					type='number'
					placeholder='00'
					label='Buscar rodada:'
					srLabel={false}
					min={1}
					max={38}
					onChange={handleFilterInput}
					value={roundFilter}
				/>

				<MatchesContainer>
					{roundFilter
						? filteredRound.map(([id, data]) => {
							return <Round key={id} roundNumber={id} matchesData={data}/>;
						})
						: roundsData.map(([id, data]) => {
							return <Round key={id} roundNumber={id} matchesData={data}/>;
						})}
				</MatchesContainer>
				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
