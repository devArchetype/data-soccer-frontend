import {
	RoundContainer,
	MatchesList,
	MatchContainer,
	RoundHeader,
	CardsWrap,
	Card,
	Team,
	ScoreBoardWrap,
	ScoreBoard
} from './styles';
import { Button } from '../../../../components/Button';
import { CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';

export const Round = ({ roundNumber, matchesData }) => {
	const [matchesListCollapse, setMatchesListCollapse] = useState(false);

	const handleMatchesListCollapse = () => {
		setMatchesListCollapse((prevState) => !prevState);
	};

	return (
		<RoundContainer>
			<RoundHeader isCollapsed={matchesListCollapse}>
				<h3>Rodada {roundNumber}</h3>

				<Button
					variantType='icon'
					variantColor='gray-600'
					title={matchesListCollapse ? 'Ocultar partidas' : 'Exibir partidas'}
					onClick={handleMatchesListCollapse}
				>
					{matchesListCollapse
						? <CaretUp weight='bold'/>
						: <CaretDown weight='bold'/>}
				</Button>
			</RoundHeader>
			<MatchesList isCollapsed={matchesListCollapse}>
				{matchesData ? matchesData.map(({ id, stadium, home, away }) => {
					return (
						<MatchContainer key={id}>
							<CardsWrap>
								<Card>
									<img src="./public/images/cards/yellow-card.svg" alt="Cartão amarelo" />
									<span>{home.yellow_cards}</span>
								</Card>
								<Card>
									<img src="./public/images/cards/red-card.svg" alt="Cartão vermelho" />
									<span>{home.red_cards}</span>
								</Card>
							</CardsWrap>

							<Team isHome={true}>
								<span>{home.name}</span>
								<img src="./public/images/datasoccer-logo.svg" alt="Cartão amarelo" />
							</Team>

							<ScoreBoardWrap>
								<ScoreBoard>
									{home.goals}
									<span>x</span>
									{away.goals}
								</ScoreBoard>

								<span>{stadium}</span>
							</ScoreBoardWrap>

							<Team isHome={false}>
								<span>{away.name}</span>
								<img src="./public/images/datasoccer-logo.svg" alt="Cartão amarelo" />
							</Team>

							<CardsWrap>
								<Card>
									<img src="./public/images/cards/yellow-card.svg" alt="Cartão amarelo" />
									<span>{away.yellow_cards}</span>
								</Card>
								<Card>
									<img src="./public/images/cards/red-card.svg" alt="Cartão vermelho" />
									<span>{away.red_cards}</span>
								</Card>
							</CardsWrap>
						</MatchContainer>
					);
				}): <h1>Oi</h1>}
			</MatchesList>
		</RoundContainer>
	);
};



