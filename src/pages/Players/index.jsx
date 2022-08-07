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
	return (
		<ContentContainer>
			<PageContainer>
				<FilterLeague label="Jogadores" />

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
