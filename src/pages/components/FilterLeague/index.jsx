import { useEffect, useState } from 'react';
import { FilterContainer, ContainerHeader } from './style';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Modal } from '../../../components/Modal';

// * preenchimento padrao de alguns campos ate fazer a conexao com a api

export const FilterLeague = ({ label, modalCodes }) => {
	const [filterIsResponsive, setFilterIsResponsive] = useState(true);
	const isResponsive = useMediaQuery('(min-width: 480px)');

	useEffect(() => {
		isResponsive ? setFilterIsResponsive(true) : setFilterIsResponsive(false);
	}, [isResponsive]);

	return (
		<FilterContainer responsive={filterIsResponsive.toString()}>
			<div className="container-context">
				<ContainerHeader>
					<h1>{label}</h1>

					<Modal codes={modalCodes} />
				</ContainerHeader>

				<select>
					<option value="">Premier League de 2019/2020</option>
				</select>
			</div>

			<div className="container-league-logo">
				<img src="https://cdn.footystats.org/img/competitions/england-premier-league.png" alt="Logo da liga" />
			</div>
		</FilterContainer>
	);
};
