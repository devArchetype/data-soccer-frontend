import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { ContentContainer, LayoutContainer } from './styles';

export const DefaultLayout = () => {
	return (
		<LayoutContainer>
			<Header/>

			<ContentContainer>
				<Outlet />
			</ContentContainer>
		</LayoutContainer>
	);
};
