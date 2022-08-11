import { ContentContainer } from '../components/ContentContainer';
import { StatisticsContainer } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { CustomContentOfTooltip } from './Components/CustomContentOfTooltip';
import { RadarChartComponent } from './Components/RadarChartComponent';
import { Footer } from '../components/Footer';

export const Statistics = () => {
	const query = [
		{
			label: 'Total de gols e assistências por posição.',
			code: `SELECT
      SUM(assistencias) AS assistencia,
      SUM(gols) AS gols
    FROM jogador
    WHERE posicao = 'Atacante';

    -- Demais posições: 'Goleiro', 'Meio de Campo', 'Defensor'`
		},
		{
			label: 'Qtd. de Gols por Nacionalidades dos Jogadores',
			code: `SELECT
      nacionalidade,
      SUM(gols) AS gols
    FROM jogador
    GROUP BY nacionalidade
    ORDER BY gols DESC
    LIMIT 5;`
		},
		{
			label: 'Dados sobre mandantes vs visitantes.',
			code: `SELECT
      gols_mandante,
      gols_visitante
    FROM disputa;

    SELECT
      SUM(cartao_vermelho_mandante),
      SUM(cartao_vermelho_visitante),
      SUM(cartao_amarelo_mandante),
      SUM(cartao_amarelo_visitante)
    FROM disputa;`
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
