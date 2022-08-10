import { useEffect, useState } from 'react';
import { FilterLeague } from '../components/FilterLeague';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import { RankingContainer, Club, RankingPageContainer } from './styles';
import { nanoid } from 'nanoid';

export const Ranking = () => {
	const [classification, setClassification] = useState([]);

	useEffect(() => {
		fetch('https://datasoccer.000webhostapp.com/getTable.php')
			.then(response => response.json())
			.then(response => handleMenuIsVisibility(response));
	}, []);

	const handleMenuIsVisibility = async (response) => {
		const data = (await response).data;
		setClassification(Object.entries(data));
	};

	const fillTable = () => {
		let classificationData = classification.sort(function(a, b) {
			if(a[1].Pts > b[1].Pts) return -1;
			else return true;
		});

		classificationData = classificationData.map(([, team], index) => {
			const {
				Pts, J, V, E, GP, GC, SG, CA, CV, Escudo, Nome,
			} = team;

			return (
				<Club key={nanoid()}>
					<td className="position" key={nanoid()}>{index + 1}º</td>
					<td className="soccer-team" key={nanoid()}>
						<div>
							<img src={Escudo || 'https://www.pngfind.com/pngs/m/14-147206_open-escudos-em-branco-vazio-png-transparent-png.png'} alt="Logo do clube"/>
							<span>{Nome}</span>
						</div>
					</td>
					<td className="points" key={nanoid()}>{Pts}</td>
					<td key={nanoid()}>{J}</td>
					<td key={nanoid()}>{V}</td>
					<td key={nanoid()}>{E}</td>
					<td key={nanoid()}>{J - V - E}</td>
					<td key={nanoid()}>{GP}</td>
					<td key={nanoid()}>{GC}</td>
					<td key={nanoid()}>{GP - GC}</td>
					<td key={nanoid()}>{CA}</td>
					<td key={nanoid()}>{CV}</td>
				</Club>
			);
		});

		return classificationData;
	};

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
		}
	];

	return (
		<ContentContainer>
			<RankingPageContainer>
				<FilterLeague label="Classificação" modalCodes={query} />
				<RankingContainer>
					<table>
						<thead>
							<tr>
								<th>Posição</th>
								<th className="soccer-team">Clube</th>
								<th title="Pontos">PTS</th>
								<th title="Jogos">J</th>
								<th title="Vitórias">V</th>
								<th title="Empates">E</th>
								<th title="Derrotas">D</th>
								<th title="Gols Pró">GP</th>
								<th title="Gols Contra">GC</th>
								<th title="Saldo de Gols">SG</th>
								<th title="Cartões Amarelos">CA</th>
								<th title="Cartões Vermelhos">CV</th>
							</tr>
						</thead>
						<tbody>
							{fillTable()}
						</tbody>
					</table>
				</RankingContainer>
				<Footer />
			</RankingPageContainer>
		</ContentContainer>
	);
};
