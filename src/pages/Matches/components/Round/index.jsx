import { useContext, useState } from 'react';
import { EnviromentContext } from '../../../../contexts/EnviromentContext';
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

export const Round = ({ roundNumber, matchesData }) => {
	const { imagesPath } = useContext(EnviromentContext);

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
				{matchesData ? matchesData.map(({
					time_mandante,
					time_visitante,
					cartao_vermelho_mandante,
					cartao_vermelho_visitante,
					cartao_amarelo_mandante,
					cartao_amarelo_visitante,
					gols_mandante,
					gols_visitante,
					escudo_mandante,
					estadio,
					escudo_visitante }) => {
					return (
						<MatchContainer key={`${time_mandante}${estadio}${time_visitante}`}>
							<CardsWrap>
								<Card>
									<img
										src={`${imagesPath}/yellow-card.svg`}
										alt="Cartão amarelo"
									/>
									<span>{cartao_amarelo_mandante}</span>
								</Card>
								<Card>
									<img
										src={`${imagesPath}/red-card.svg`}
										alt="Cartão vermelho"
									/>
									<span>{cartao_vermelho_mandante}</span>
								</Card>
							</CardsWrap>

							<Team isHome={true}>
								<span>{time_mandante}</span>
								<img
									src={escudo_mandante}
									alt="Cartão amarelo"
								/>
							</Team>

							<ScoreBoardWrap>
								<ScoreBoard>
									{gols_mandante}
									<span>x</span>
									{gols_visitante}
								</ScoreBoard>

								<span>{estadio}</span>
							</ScoreBoardWrap>

							<Team isHome={false}>
								<span>{time_visitante}</span>
								<img
									src={escudo_visitante}
									alt="Cartão amarelo"
								/>
							</Team>

							<CardsWrap>
								<Card>
									<img
										src={`${imagesPath}/yellow-card.svg`}
										alt="Cartão amarelo"
									/>
									<span>{cartao_amarelo_visitante}</span>
								</Card>
								<Card>
									<img
										src={`${imagesPath}/red-card.svg`}
										alt="Cartão vermelho"
									/>
									<span>{cartao_vermelho_visitante}</span>
								</Card>
							</CardsWrap>
						</MatchContainer>
					);
				}): <h1>Oi</h1>}
			</MatchesList>
		</RoundContainer>
	);
};



