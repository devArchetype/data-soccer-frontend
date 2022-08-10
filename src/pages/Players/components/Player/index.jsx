import { useContext } from 'react';
import { EnviromentContext } from '../../../../contexts/EnviromentContext';
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

export const Player = ({ playerData }) => {
	const { imagesPath } = useContext(EnviromentContext);

	const {
		nome,
		idade,
		assistencias,
		gols,
		cartoes_amarelos,
		cartoes_vermelhos,
		nacionalidade,
		penaltis_defendidos,
		posicao,
	} = playerData;

	const getPlayerPortuguesePosition = (englishPosition) => {
		const positionsTranslations = {
			'midfielder': 'Meio campo',
			'forward': 'Atacante',
			'defender': 'Defensor',
			'goalkeeper': 'Goleiro',
		};

		return englishPosition
			? positionsTranslations[englishPosition.toLowerCase()]
			: englishPosition;
	};

	return (
		<PlayerContainer>
			<PlayerName>
				{nome}
			</PlayerName>

			<ImageContainer>
				<PlayerPlaceholder>
					<img
						src={`${imagesPath}/player-placeholder.svg`}
						alt="Silhueta jogador"
					/>
				</PlayerPlaceholder>

				<CardsWrap>
					<Card>
						<img src={`${imagesPath}/yellow-card.svg`} alt="Cartão amarelo" />
						<span>{cartoes_amarelos}</span>
					</Card>
					<Card>
						<img src={`${imagesPath}/red-card.svg`} alt="Cartão vermelho" />
						<span>{cartoes_vermelhos}</span>
					</Card>
				</CardsWrap>
			</ImageContainer>

			<PlayerDataList>
				<PlayerData>Nacionalidade: <span>{nacionalidade}</span></PlayerData>
				<PlayerData>Idade: <span>{idade}</span></PlayerData>
				<PlayerData>
          Posição: <span>{getPlayerPortuguesePosition(posicao)}</span>
				</PlayerData>
				<PlayerData>Gols: <span>{gols}</span></PlayerData>
				<PlayerData>Assistências: <span>{assistencias}</span></PlayerData>
				{penaltis_defendidos !== 0 || (
					<PlayerData>
            Pênaltis defendidos: <span>{penaltis_defendidos}</span>
					</PlayerData>
				)}
			</PlayerDataList>
		</PlayerContainer>
	);
};
