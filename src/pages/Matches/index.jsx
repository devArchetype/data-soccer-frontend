import { ContentContainer } from '../components/ContentContainer';
import { MatchesContainer, PageContainer } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Footer } from '../components/Footer';
import { Round } from './components/Round';

import roundsData from './data/rounds-data.json';
import { Input } from '../../components/Input';

export const Matches = () => {
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
				/>

				<MatchesContainer>
					{roundsData.map(({ number, matches}) => {
						return <Round key={number} roundNumber={1} matchesData={matches} />;
					})}

				</MatchesContainer>
				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
