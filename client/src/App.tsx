import Home from '@components/Home';
import { Box } from '@mui/material';

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		width: '100%',
	},
};

const App = () => (
	<Box sx={styles.root}>
		<Home />
	</Box>
);

export default App;
