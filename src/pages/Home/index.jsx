import { BackgroundImageContainer, HomeContainer, HomeTitle } from './styles';
import { ContentContainer } from '../components/ContentContainer';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Home = () => {
	return (
		<BackgroundImageContainer>
			<ContentContainer>
				<HomeContainer>
					<div>
						<HomeTitle>
            DataSoccer
						</HomeTitle>
						<p>Acompanhe as principais ligas do futebol internacional</p>
					</div>

					<Link to='/classificacao'>
						<Button variantColor='green-300'>
              Acompanhe já!
						</Button>
					</Link>

					<Footer textColor='white'/>
				</HomeContainer>
			</ContentContainer>
		</BackgroundImageContainer>
	);
};
