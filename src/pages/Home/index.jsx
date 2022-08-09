import { useContext } from 'react';
import { EnviromentContext } from '../../contexts/EnviromentContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import { BackgroundImageContainer, HomeContainer } from './styles';
import { ContentContainer } from '../components/ContentContainer';
import { Button } from '../../components/Button';
import { Footer } from '../components/Footer';
import { Logo } from '../../components/Logo';

export const Home = () => {
	const { imagesPath } = useContext(EnviromentContext);

	const isDesktopHeight = useMediaQuery('(min-height: 480px)');

	return (
		<>
			<ContentContainer>
				<HomeContainer>
					<div>
						<Logo/>
						<p>Acompanhe as principais ligas do futebol internacional</p>
					</div>

					<Link to='/classificacao'>
						{isDesktopHeight && (
							<Button variantColor='green-300'>
                Acompanhe já!
							</Button>
						)}
					</Link>
					<Footer textColor='white' />
				</HomeContainer>
			</ContentContainer>
			<BackgroundImageContainer imagePath={imagesPath}/>
		</>
	);
};
