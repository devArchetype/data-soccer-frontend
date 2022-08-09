import { ContentContainer } from '../components/ContentContainer';
import { StatisticsContainer } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { CustomContentOfTooltip } from './Components/CustomContentOfTooltip';
import { RadarChartComponent } from './Components/RadarChartComponent';
import { Footer } from '../components/Footer';

export const Statistics = () => {
	const query = [
		{
			label: 'Teste Query',
			code: `SELECT Time.nome, COUNT(*) AS "Quantas vezes ganhou"
      FROM Time
      INNER JOIN Disputa
      ON Disputa.clube_id_mandante = Time.id_clube
      WHERE Disputa.gols_mandante > Disputa.gols_visitante
      AND Time.nome like 'Arsenal FC'
      GROUP BY Time.nome;`
		},
		{
			label: 'Teste Query 2',
			code: `SELECT Time.nome, COUNT(*) AS "Quantas vezes ganhou"
      FROM Time
      INNER JOIN Disputa
      ON Disputa.clube_id_mandante = Time.id_clube
      WHERE Disputa.gols_mandante > Disputa.gols_visitante
      AND Time.nome like 'Arsenal FC'
      GROUP BY Time.nome;`
		},
		{
			label: 'Teste Query 3',
			code: `SELECT Time.nome, COUNT(*) AS "Quantas vezes ganhou"
      FROM Time
      INNER JOIN Disputa
      ON Disputa.clube_id_mandante = Time.id_clube
      WHERE Disputa.gols_mandante > Disputa.gols_visitante
      AND Time.nome like 'Arsenal FC'
      GROUP BY Time.nome;`
		}
	];
	return (
		<ContentContainer>
			<StatisticsContainer>
				<FilterLeague label="Estatísticas" modalCodes={query}>

				</FilterLeague>
				<CustomContentOfTooltip />
				<RadarChartComponent />
				<Footer />
			</StatisticsContainer>
		</ContentContainer>
	);
};
