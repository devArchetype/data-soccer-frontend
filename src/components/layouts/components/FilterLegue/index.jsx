import { FilterContainer, FilterLimiter } from './style';

// * preenchimento padrao de alguns campos ate fazer a conecao com a api

export const FilterLegue = ({ label }) => {
	return (
		<FilterContainer>
			<FilterLimiter>

				<div className="container-context">
					<h1>{label}</h1>

					<select>
						<option value="">Premier Legue 2019/2020</option>
					</select>
				</div>

				<div className="container-league-logo">
					<img src="https://cdn.footystats.org/img/competitions/england-premier-league.png" alt="Logo da liga" />
				</div>
			</FilterLimiter>
		</FilterContainer>
	);
};
