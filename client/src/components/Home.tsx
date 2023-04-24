import {
	MoviesDocument,
	useAddMovieMutation,
	useMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, Button, Typography } from '@mui/material';
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
		color: 'black',
	},
};

const Home = () => {
	const { data, loading, error } = useMoviesQuery();
	const [addProject] = useAddMovieMutation({
		onCompleted: () => {},
		onError: () => {},
		refetchQueries: [MoviesDocument],
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
			<Typography variant='h1'>{sayHello('Hello world')} !!!</Typography>
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
