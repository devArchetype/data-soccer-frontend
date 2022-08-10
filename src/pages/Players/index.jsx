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
			label: 'Informações dos jogadores de determinado time.',
			code: 'SELECT * FROM jogador WHERE clube_id = Id_time'
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
