import { BackgroundImageContainer, HomeContainer } from './styles';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ContentContainer } from '../components/ContentContainer';
import { Button } from '../../components/Button';
import { Footer } from '../components/Footer';
import { Logo } from '../../components/Logo';

export const Home = () => {
	const isDesktop = useMediaQuery('(min-width: 768px)');

	return (
		<>
			<ContentContainer>
				<HomeContainer>
					<div>
						<Logo/>
						<p>Acompanhe as principais ligas do futebol internacional</p>
					</div>

					<Link to='/classificacao'>
						{isDesktop && (
							<Button variantColor='green-300'>
                Acompanhe já!
							</Button>
						)}
					</Link>
					<Footer textColor='white' />
				</HomeContainer>
			</ContentContainer>
			<BackgroundImageContainer />
		</>
	);
};
