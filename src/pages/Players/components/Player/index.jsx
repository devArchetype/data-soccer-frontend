import {
	PlayerContainer,
	PlayerName,
	ImageContainer,
	PlayerPlaceholder,
	CardsWrap,
	Card,
	PlayerDataList,
	PlayerData
} from './styles';

export const Player = () => {
	return (
		<PlayerContainer>
			<PlayerName>
				{'Cristiano Ronaldo'}
			</PlayerName>

			<ImageContainer>
				<PlayerPlaceholder>
					<img src="./public/images/player-placeholder.svg" alt="" />
				</PlayerPlaceholder>

				<CardsWrap>
					<Card>
						<img src="./public/images/cards/yellow-card.svg" alt="Cartão amarelo" />
						<span>{'1'}</span>
					</Card>
					<Card>
						<img src="./public/images/cards/red-card.svg" alt="Cartão vermelho" />
						<span>{'0'}</span>
					</Card>
				</CardsWrap>
			</ImageContainer>

			<PlayerDataList>
				<PlayerData>Nacionalidade: <span>{'Portugal'}</span></PlayerData>
				<PlayerData>Idade: <span>{'37'}</span></PlayerData>
				<PlayerData>Posição: <span>{'Atacante'}</span></PlayerData>
				<PlayerData>Gols: <span>{'15'}</span></PlayerData>
				<PlayerData>Assistências: <span>{'8'}</span></PlayerData>
				<PlayerData>Pênaltis defendidos: <span>{'0'}</span></PlayerData>
			</PlayerDataList>
		</PlayerContainer>
	);
};
