import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { EnviromentContextProvider } from './contexts/EnviromentContext';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<BrowserRouter>
				<EnviromentContextProvider>

					<Router />
				</EnviromentContextProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
};
