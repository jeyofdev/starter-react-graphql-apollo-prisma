echo "Adding @mui/material @emotion/react @emotion/styled as a dependency"
cd client
npm install @mui/material @emotion/react @emotion/styled
echo "Ok"

echo "Adding icons"
npm install @mui/icons-material

cat <<EOT > index.html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite + React + TS</title>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/icon?family=Material+Icons"
		/>
	</head>
	<body>
		<div id="root"></div>
		<script type="module" src="/src/main.tsx"></script>
	</body>
</html>

EOT
echo "Ok"

echo "Adding theme"
touch src/globalTheme.ts
cat <<EOT > src/globalTheme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

// A custom theme for this app
const globalTheme = createTheme({
	...theme,
	typography: {
		h1: {
			fontSize: '1rem',
			[theme.breakpoints.up('sm')]: {
				fontSize: '1.15rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '1.25rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '2.35rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '1.5rem',
			},
		},
	},
	palette: {
		info: {
			main: 'rgb(219, 234, 254)',
		},
	},
});

export default globalTheme;

EOT

cat <<EOT > main.tsx
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

EOT
echo "Ok"

echo "✅ ✅ Material ui is now ready to use ✅ ✅"
