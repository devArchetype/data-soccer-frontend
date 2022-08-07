import { ContentContainer } from '../components/ContentContainer';
import { MatchesContainer, PageContainer } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Footer } from '../components/Footer';
import { Round } from './components/Round';

import roundsData from './data/rounds-data.json';

export const Matches = () => {

	return (
		<ContentContainer>
			<PageContainer>
				<FilterLeague label="Classificação" />

				<MatchesContainer>
					{roundsData.map(({ number, matches}) => {
						return (
							<Round
								key={number}
								roundNumber={number}
								matchesData={matches}
							/>
						);
					})}

				</MatchesContainer>
				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
