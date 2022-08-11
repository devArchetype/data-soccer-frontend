import { useState, useEffect } from 'react';
import { GraphicContainer } from './styles.js';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';

const data = [
	{
		position: 'Atacante',
		gols: 325,
		assistencias: 342
	},
	{
		position: 'Meio de Campo',
		gols: 203,
		assistencias: 255,
	},
	{
		position: 'Defensor',
		gols: 94,
		assistencias: 23,
	},
	{
		position: 'Goleiro',
		gols: 11,
		assistencias: 26,
	},
];

const getIntroOfPage = (label) => {
	if (label === 'Atacante') {
		return 'O atacante ou avançado é uma posição de linha do futebol. Desempenha função ofensiva, com objetivo de fazer gols ou dar assistências para seus companheiros.';
	}
	if (label === 'Meio de Campo') {
		return 'O meio-campo ou meio de campo é o aspecto central do gramado do futebol. Nesta área, os meio-campistas desempenham funções de ligar a defesa ao ataque durante a partida e evitar golpes de adversários.';
	}
	if (label === 'Defensor') {
		return 'o Defensor é o jogador que ocupa a posição entre a linha média e o gol ou baliza, sendo a principal posição da linha de defesa. A principal função do defesa é marcar os atacantes, evitando que estes criem possibilidades de gol.';
	}
	if (label === 'Goleiro') {
		return 'O goleiro é o único jogador de uma equipe de futebol que pode tocar a bola com as mãos com o jogo “rolando”. Sua função é evitar o gol, evitando que o clube adversário marque pontos. Justamente por ser a sua função diferente da dos demais jogadores, é protegido por regras específicas.';
	}
	return '';
};

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${label} : ${payload[0].value} gols e ${payload[1].value} assistências`}</p>
				<p className="intro">{getIntroOfPage(label)}</p>
			</div>
		);
	}

	return null;
};

export function CustomContentOfTooltip() {
	const [dataChart, setDataChart] = useState([]);

	useEffect(() => {
		fetch('https://datasoccer.000webhostapp.com/getStats.php?stats=1')
			.then(response => response.json())
			.then(response => handleData(response));
	}, []);

	const handleData = async (response) => {
		const data = (await response).data;
		setDataChart(Object.entries(data));
	};

	const fillChart = () => {
		const data = dataChart.map(([position, stats]) => {
			return {
				position: position === 'MeioDeCampo' ? 'Meio de Campo' : position === 'Zaqueiro' ? 'Defensor' : position,
				gols: stats[0].gols,
				assistencias: stats[0].assistencia
			};
		});
		return data;
	};

	return (
		<GraphicContainer>
			<div className="title">
				<h2>Gols e Assistências por Posição</h2>
			</div>

			<ResponsiveContainer className="graphic-responsive">
				<BarChart
					width={500}
					height={300}
					data={fillChart()}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="position" />
					<YAxis />
					<Tooltip content={<CustomTooltip />} />
					<Legend />
					<Bar dataKey="gols" barSize={40} fill="#06aa48" />
					<Bar dataKey="assistencias" barSize={40} fill="#2c3e50" />
				</BarChart>
			</ResponsiveContainer>
		</GraphicContainer>
	);
}
