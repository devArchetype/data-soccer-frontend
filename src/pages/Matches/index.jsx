import { ContentContainer } from '../components/ContentContainer';
import { MatchesContainer, PageContainer } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Footer } from '../components/Footer';
import { Round } from './components/Round';

import roundsData from './data/rounds-data.json';
import { Input } from '../../components/Input';

export const Matches = () => {
	return (
		<ContentContainer>
			<PageContainer>
				<FilterLeague label="Partidas" />

				<Input
					type='number'
					placeholder='00'
					label='Buscar rodada:'
					srLabel={false}
					min={1}
					max={38}
				/>

				<MatchesContainer>
					{roundsData.map(({ number, matches}) => {
						return <Round key={number} roundNumber={1} matchesData={matches} />;
					})}

				</MatchesContainer>
				<Footer />
			</PageContainer>
		</ContentContainer>
	);
};
