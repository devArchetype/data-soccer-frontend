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
			label: 'Dados sobre as partidas de cada rodada.',
			code: `SELECT
      disputa.numero_rodada,
      disputa.clube_id_mandante,
      disputa.clube_id_visitante,
      disputa.estadio,
      disputa.cartao_vermelho_mandante,
      disputa.cartao_vermelho_visitante,
      disputa.cartao_amarelo_mandante,
      disputa.cartao_amarelo_visitante,
      disputa.gols_mandante,
      disputa.gols_visitante,
      time1.nome AS nome_mandante,
      time2.nome AS nome_visitante,
      time1.escudo AS escudo_mandante,
      time2.escudo AS escudo_visitante
    FROM disputa
      INNER JOIN time time1 ON time1.id_clube = disputa.clube_id_mandante
      INNER JOIN time time2 ON time2.id_clube = disputa.clube_id_visitante;`
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
						? filteredRound.map(([id, data], index) => {
							return (
								<Round
									key={id}
									roundNumber={id}
									matchesData={data}
									index={index}
								/>
							);
						})
						: roundsData.map(([id, data], index) => {
							return (
								<Round
									key={id}
									roundNumber={id}
									matchesData={data}
									index={index}
								/>
							);
						})}
				</MatchesContainer>
				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
