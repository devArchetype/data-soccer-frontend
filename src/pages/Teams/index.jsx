import { useContext, useState, useEffect } from 'react';
import { EnviromentContext } from '../../contexts/EnviromentContext';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../components/ContentContainer';
import { TeamsContainer, Team } from './styles';
import { FilterLeague } from '../components/FilterLeague';
import { Input } from '../../components/Input';
import { Footer } from '../components/Footer';
import { nanoid } from 'nanoid';

export const Teams = () => {
	const { imagesPath } = useContext(EnviromentContext);

	const [searchTeam, setSearchTeam] = useState('');
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		fetch('https://datasoccer.000webhostapp.com/getTable.php')
			.then(response => response.json())
			.then(response => handleData(response));
	}, []);

	const handleData = async (response) => {
		const data = (await response).data;
		setTeams(Object.entries(data));
	};

	const fillTeams = () => {
		let classificationData = teams.sort(function(a, b) {
			if(a[1].Nome < b[1].Nome) return -1;
			else return true;
		});

		classificationData = classificationData.map(([id, team]) => {
			const {
				J, V, E, GP, CA, CV, Escudo, Nome,
			} = team;

			//nao renderiza componente se o nome nao bater
			const clubName = Nome.toUpperCase();
			const wantedClub = searchTeam.toUpperCase();
			if(!clubName.includes(wantedClub)) return;

			return (
				<Team key={nanoid()}>
					<div className="information">
						<h2>{Nome}</h2>

						<div className="stats">
							<ul>
								<li>Vitórias: <span>{V}</span></li>
								<li>Empates: <span>{E}</span></li>
								<li>Derrotas: <span>{J - V - E}</span></li>
								<li>Total de Gols: <span>{GP}</span></li>
							</ul>

							<ul className="cards">
								<li className="card">
									<img
										src={`${imagesPath}/yellow-card.svg`}
										alt="Cartão amarelo"
									/>
									<span> {CA}</span>
								</li>
								<li className="card">
									<img
										src={`${imagesPath}/red-card.svg`}
										alt="Cartão vermelho"
									/>
									<span> {CV}</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="cast">
						<img
							src={Escudo || 'https://w7.pngwing.com/pngs/542/936/png-transparent-white-line-black-m-line.png'} alt={`Logo do ${Nome}`} />
						<Link to={`/times/${id}/${Nome.replace(' ', '_')}/jogadores`}>
							<p>Ver Elenco</p>
						</Link>
					</div>
				</Team>
			);
		});

		return classificationData;
	};

	const query = [
		{
			label: 'Resultos finais de cada time.',
			code: `SELECT
      disputa.clube_id_mandante,
      disputa.clube_id_visitante,
      disputa.cartao_vermelho_mandante,
      disputa.cartao_vermelho_visitante,
      disputa.cartao_amarelo_mandante,
      disputa.cartao_amarelo_visitante,
      disputa.gols_mandante,
      disputa.gols_visitante,
      time1.nome AS nome_mandante,
      time2.nome AS nome_visitante,
      time1.escudo AS escudo_mandante,
      time2.escudo AS escudo_visitante
    FROM disputa
      INNER JOIN time time1 ON time1.id_clube = disputa.clube_id_mandante
      INNER JOIN time time2 ON time2.id_clube = disputa.clube_id_visitante;`
		}
	];

	return (
		<ContentContainer>
			<TeamsContainer>
				<FilterLeague label="Times" modalCodes={query}/>

				<Input
					label="Buscar Time:"
					type="text"
					placeholder="Nome do time"
					onChange={(event) => setSearchTeam(event.target.value)}
					value={searchTeam}
				/>

				<section className="teams-presentation">
					{fillTeams(18)}
				</section>
				<Footer />
			</TeamsContainer>
		</ContentContainer>
	);
};
