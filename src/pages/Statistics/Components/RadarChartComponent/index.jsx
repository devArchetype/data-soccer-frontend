import { GraphicContainer } from './styles.js';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend
} from 'recharts';

const nationalityData = [
	{
		subject: 'Inglaterra',
		quantity: 233,
	},
	{
		subject: 'Brasil',
		quantity: 269,
	},
	{
		subject: 'Estados Unidos',
		quantity: 286,
	},
	{
		subject: 'México',
		quantity: 123,
	},
	{
		subject: 'Alemanha',
		quantity: 85,
	},
	{
		subject: 'Outros',
		quantity: 230,
	}
];

const teamsData = [
	{
		subject: 'Vitórias',
		mandante: 23,
		visitante: 27
	},
	{
		subject: 'Derrotas',
		mandante: 18,
		visitante: 19
	},
	{
		subject: 'Cartões Amarelo',
		mandante: 33,
		visitante: 24
	},
	{
		subject: 'Cartões Vermelhos',
		mandante: 29,
		visitante: 20
	},
	{
		subject: 'Empates',
		mandante:24,
		visitante: 16
	},
];

export const RadarChartComponent = () => {
	return (
		<GraphicContainer>
			<div className="graphic-responsive">
				<div className="chart">
					<div className="title">
						<h2>Principais Nacionalidades dos Jogadores</h2>
					</div>

					<RadarChart
						cx={240}
						cy={150}
						outerRadius={130}
						width={500}
						height={330}
						data={nationalityData}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" />
						<PolarRadiusAxis />
						<Radar
							name="Nacionalidade"
							dataKey="quantity"
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
						data={teamsData}
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
