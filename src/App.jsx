import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
};
