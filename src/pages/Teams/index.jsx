import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ContentContainer } from '../components/ContentContainer';
import { TeamsContainer, Team } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Input } from '../../components/Input';
import { Footer } from '../components/Footer';
import { nanoid } from 'nanoid';

export const Teams = () => {
	const [searchTeam, setSearchTeam] = useState('');
	const teamsData = []; //simbolizando os dados recebidos da api

	const fillTeams = (size) => {
		//dados ilustrativos - este trecho sera excluido
		for (let i = 1; i <= size; i++) {
			teamsData.push({
				position: 1,
				club: 'Tottenham',
				shield: 'https://cdn.footystats.org/img/teams/england-tottenham-hotspur-fc.png',
				points: 67,
				matches: 38,
				victories: 23,
				draws: 0,
				defeats: 15,
				goalsInFavor: 89,
				goalsAgainst: 56,
				goalDifference: 33,
				yellowCards: 45,
				redCards: 5,
			});
		}

		teamsData.push({
			position: 1,
			club: 'São Paulo',
			shield: 'https://cdn.footystats.org/img/teams/england-tottenham-hotspur-fc.png',
			points: 67,
			matches: 38,
			victories: 23,
			draws: 0,
			defeats: 15,
			goalsInFavor: 89,
			goalsAgainst: 56,
			goalDifference: 33,
			yellowCards: 45,
			redCards: 5,
		});

		teamsData.push({
			position: 1,
			club: 'São Caetano',
			shield: 'https://cdn.footystats.org/img/teams/england-tottenham-hotspur-fc.png',
			points: 67,
			matches: 38,
			victories: 23,
			draws: 0,
			defeats: 15,
			goalsInFavor: 89,
			goalsAgainst: 56,
			goalDifference: 33,
			yellowCards: 45,
			redCards: 5,
		});

		const teamDataContainers = teamsData.map((teamData) => {
			const {
				club,
				shield,
				victories,
				draws,
				defeats,
				goalsInFavor,
				yellowCards,
				redCards
			} = teamData;

			//nao renderiza componente se o nome nao bater
			const clubName = club.toUpperCase();
			const wantedClub = searchTeam.toUpperCase();
			if(!clubName.includes(wantedClub)) return;

			return (
				<Team key={nanoid()}>
					<div className="information">
						<h2>{club}</h2>

						<div className="stats">
							<ul>
								<li>Vitórias: <span>{victories}</span></li>
								<li>Empates: <span>{draws}</span></li>
								<li>Derrotas: <span>{defeats}</span></li>
								<li>Total de Gols: <span>{goalsInFavor}</span></li>
							</ul>

							<ul className="cards">
								<li className="card">
									<img src="./src/assets/cards/yellow-card.svg" alt="cartão amarelo" />
									<span> {yellowCards}</span>
								</li>
								<li className="card">
									<img src="./src/assets/cards/red-card.svg" alt="cartão vermelho" />
									<span> {redCards}</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="cast">
						<img src={shield} alt="Logo do Time" />
						<Link to='/jogadores'>
							<p>Ver Elenco</p>
						</Link>
					</div>
				</Team>
			);
		});

		return teamDataContainers;
	};

	return (
		<ContentContainer>
			<TeamsContainer>
				<FilterLeague label="Times" />

				<section className="filter-teams">
					<div className="input-container">
						<Input
							label="Buscar Time: "
							type="text"
							placeholder="nome do time"
							onChange={(event) => setSearchTeam(event.target.value)}
							value={searchTeam}
						/>
					</div>
				</section>

				<section className="teams-presentation">
					{fillTeams(18)}
				</section>

				<Footer />
			</TeamsContainer>
		</ContentContainer>
	);
};
