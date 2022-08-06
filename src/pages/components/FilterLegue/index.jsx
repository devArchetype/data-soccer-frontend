import { useEffect, useState } from 'react';
import { FilterContainer } from './style';
import { ContentContainer } from '../ContentContainer';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

// * preenchimento padrao de alguns campos ate fazer a conexao com a api

export const FilterLegue = ({ label }) => {
	const [filterIsResponsive, setFilterIsResponsive] = useState(true);
	const isResponsive = useMediaQuery('(min-width: 360px)');

	useEffect(() => {
		isResponsive ? setFilterIsResponsive(true) : setFilterIsResponsive(false);
	}, [isResponsive]);

	return (
		<ContentContainer>
			<FilterContainer responsive={filterIsResponsive.toString()}>
				<div className="container-context">
					<h1>{label}</h1>

					<select>
						<option value="">Premier Legue 2019/2020</option>
					</select>
				</div>

				<div className="container-league-logo">
					<img src="https://cdn.footystats.org/img/competitions/england-premier-league.png" alt="Logo da liga" />
				</div>
			</FilterContainer>
		</ContentContainer>
	);
};
