import {
	PlayerContainer,
	PlayerContainerHeader,
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
			<PlayerContainerHeader>
				{'Cristiano Ronaldo'} <span>{'7'}</span>
			</PlayerContainerHeader>

			<ImageContainer>
				<PlayerPlaceholder>
					<img src="./src/assets/images/player-placeholder.svg" alt="" />
				</PlayerPlaceholder>

				<CardsWrap>
					<Card>
						<img src="./src/assets/cards/yellow-card.svg" alt="Cartão amarelo" />
						<span>{'1'}</span>
					</Card>
					<Card>
						<img src="./src/assets/cards/red-card.svg" alt="Cartão vermelho" />
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
