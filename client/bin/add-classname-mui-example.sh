cd client

cat <<EOT > src/components/Home.tsx
import { useMutation, useQuery } from '@apollo/client';
import mutations from '@graphql/mutations';
import queries from '@graphql/queries';
import { Box, Button } from '@mui/material';
import sayHello from '@utils/index';

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	btn: {
		padding: '0.5rem 1rem',
		borderRadius: '0.625rem',
		border: 'none',
		backgroundColor: 'rgb(221, 239, 255)',
		cursor: 'pointer',
    color: 'black'
	},
};

const Home = () => {
	const { data, loading, error } = useQuery(queries.movies);
	const [addProject] = useMutation(mutations.addMovie, {
		onCompleted: () => {},
		onError: () => {},
		refetchQueries: [queries.movies],
	});

  if (loading) {
		return <p>...Loading</p>;
	}

	if (error) {
		// eslint-disable-next-line no-console
		console.log(error, error.message);
		return <p>Oooops</p>;
	}

	// eslint-disable-next-line no-console
	console.log(data, loading, error);

	return (
		<Box sx={styles.root}>
			<h1>{sayHello('Hello world')} !!!</h1>
			<Button
				variant='text'
				onClick={() =>
					addProject({ variables: { title: 'John Wick', duration: 101 } })
				}
				sx={styles.btn}
			>
				Add movie
			</Button>
		</Box>
	);
};
export default Home;

EOT


cat <<EOT > src/App.tsx
import Home from '@components/Home';
import { Box } from "@mui/material";

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
	<Box
		sx={styles.root}
	>
		<Home />
	</Box>
);

export default App;

EOT

echo "✅ ✅ Material UI is used on components App and Home ✅ ✅"
