import { BackgroundImageContainer, HomeContainer } from './styles';
import { ContentContainer } from '../components/ContentContainer';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Logo } from '../../components/Logo';

export const Home = () => {
	return (
		<ContentContainer>
			<HomeContainer>
				<div>
					<Logo/>
					<p>Acompanhe as principais ligas do futebol internacional</p>
				</div>

				<Link to='/classificacao'>
					<Button variantColor='green-300'>
              Acompanhe já!
					</Button>
				</Link>
				<Footer textColor='white' />
			</HomeContainer>
			<BackgroundImageContainer />
		</ContentContainer>
	);
};
