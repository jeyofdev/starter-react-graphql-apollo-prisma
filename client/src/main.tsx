import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import client from './config/apollo';
import theme from './globalTheme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</React.StrictMode>,
);
