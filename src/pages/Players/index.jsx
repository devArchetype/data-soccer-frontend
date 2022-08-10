import { ContentContainer } from '../components/ContentContainer';
import {
	PageContainer,
	TeamContainerHeader,
	PlayersList
} from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Player } from './components/Player';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';

export const Players = () => {
	const[playersData, setPlayersData] = useState([]);

	useEffect(() => {
		fetch('https://datasoccer.000webhostapp.com/getPlayers.php?')
			.then(response => response.json())
			.then(data => setPlayersData(Object.entries(data.data)));
	}, []);

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
				<FilterLeague label="Jogadores" modalCodes={query} />

				<div>
					<TeamContainerHeader >
						<h3>DataSoccer F.C</h3>
					</TeamContainerHeader>

					<PlayersList >
						{playersData && playersData.map(([id, data]) => {
							return <Player key={id} playerData={data} />;
						})}
					</PlayersList>
				</div>

				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
