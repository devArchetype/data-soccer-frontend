import { useState, useEffect } from 'react';
import { GraphicContainer } from './styles.js';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend
} from 'recharts';

export const RadarChartComponent = () => {
	const [dataChartNationality, setDataChartNationality] = useState([]);
	const [dataChartComparation, setDataChartComparation] = useState([]);

	useEffect(() => {
		fetch('https://datasoccer.000webhostapp.com/getStats.php?stats=2')
			.then(response => response.json())
			.then(response => handleDataNationality(response));
	}, []);

	useEffect(() => {
		fetch('https://datasoccer.000webhostapp.com/getStats.php?stats=3')
			.then(response => response.json())
			.then(response => handleDataComparation(response));
	}, []);

	const handleDataNationality = async (response) => {
		const data = (await response).data;
		setDataChartNationality(data);
	};

	const handleDataComparation= async (response) => {
		const data = (await response).data;
		setDataChartComparation(data);
	};

	const fillChartComparation = () => {
		return [
			{
				subject: 'Vitórias',
				mandante: dataChartComparation.vitoria_mandante,
				visitante: dataChartComparation.vitoria_visitante,
			},
			{
				subject: 'Derrotas',
				mandante: dataChartComparation.derrota_mandante,
				visitante: dataChartComparation.derrota_visitante,
			},
			{
				subject: 'Cartões Amarelo',
				mandante: dataChartComparation.cartao_amarelo_mandante,
				visitante: dataChartComparation.cartao_amarelo_visitante,
			},
			{
				subject: 'Cartões Vermelhos',
				mandante: dataChartComparation.cartao_vermelho_mandante,
				visitante: dataChartComparation.cartao_vermelho_visitante,
			},
			{
				subject: 'Empates',
				mandante: dataChartComparation.empate_mandante,
				visitante: dataChartComparation.empate_visitante,
			},
		];
	};

	const getCountryPortugueseName = (englishName) => {
		const translate = {
			'Belgium':'Bélgica',
			'Brazil':'Brasil',
			'England':'Inglaterra',
			'France':'França',
			'Spain':'Espanha',
			'outros':'Outros',
		};

		return englishName ? translate[englishName] : englishName;
	};

	const fillChartNationality = () => {
		return dataChartNationality.map(({ nacionalidade, gols }) => {
			return {
				nacionalidade: getCountryPortugueseName(nacionalidade),
				gols: Number(gols),
			};
		});
	};

	return (
		<GraphicContainer>
			<div className="graphic-responsive">
				<div className="chart">
					<div className="title">
						<h2>Qtd. de Gols por Nacionalidades dos Jogadores</h2>
					</div>

					<RadarChart
						cx={240}
						cy={150}
						outerRadius={130}
						width={500}
						height={330}
						data={fillChartNationality()}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="nacionalidade" />
						<PolarRadiusAxis />
						<Radar
							name="Qtd. de Gols"
							dataKey="gols"
							stroke="#06aa48"
							fill="#06aa48"
							fillOpacity={0.6}
						/>
						<Legend />
					</RadarChart>
				</div>

				<div className="chart">
					<div className="title">
						<h2>Mandate X Visitante</h2>
					</div>

					<RadarChart
						cx={240}
						cy={150}
						outerRadius={130}
						width={500}
						height={330}
						data={fillChartComparation()}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" />
						<PolarRadiusAxis />
						<Radar
							name="Mandante"
							dataKey="mandante"
							stroke="#1581ed"
							fill="#1581ed"
							fillOpacity={0.6}
						/>
						<Radar
							name="Visitante"
							dataKey="visitante"
							stroke="#993399"
							fill="#993399"
							fillOpacity={0.6}
						/>
						<Legend />
					</RadarChart>
				</div>
			</div>
		</GraphicContainer>
	);
};
