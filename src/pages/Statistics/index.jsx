import { ContentContainer } from '../components/ContentContainer';
import { StatisticsContainer } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { CustomContentOfTooltip } from './Components/CustomContentOfTooltip';
import { Footer } from '../components/Footer';

export const Statistics = () => {
	return (
		<ContentContainer>
			<StatisticsContainer>
				<FilterLeague label="Estatísticas" />
				<CustomContentOfTooltip />
				<Footer />
			</StatisticsContainer>
		</ContentContainer>
	);
};
