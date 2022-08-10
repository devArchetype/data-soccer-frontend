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
import { Link, useParams } from 'react-router-dom';

export const Players = () => {
	const { teamID, teamName } = useParams();
	const[allPlayersData, setAllPlayersData] = useState([]);

	useEffect(() => {
		fetch(`https://datasoccer.000webhostapp.com/getPlayers.php?id_team=${teamID}`)
			.then(response => response.json())
			.then(data => setAllPlayersData(Object.entries(data.data)));
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
						<h3>{teamName.replace('_', ' ')}</h3>
						<Link to='/times'>Times</Link>
					</TeamContainerHeader>

					<PlayersList >
						{allPlayersData.map(([id, data]) => {
							return <Player key={id} playerData={data} />;
						})}
					</PlayersList>
				</div>

				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
