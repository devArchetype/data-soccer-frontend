import { ContentContainer } from '../components/ContentContainer';
import {
	PageContainer,
	TeamContainerHeader,
	PlayersList
} from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Player } from './components/Player';
import { Footer } from '../components/Footer';

export const Players = () => {
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
						{/* map */}
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
						<Player />
					</PlayersList>
				</div>

				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
