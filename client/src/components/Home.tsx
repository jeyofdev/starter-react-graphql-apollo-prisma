import {
	MoviesDocument,
	useAddMovieMutation,
	useMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import sayHello from '@utils/index';

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
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<h1>{sayHello('Hello world')} !!!</h1>
			<button
				onClick={() =>
					addProject({ variables: { title: 'John Wick', duration: 101 } })
				}
				style={{
					padding: '0.5rem 1rem',
					borderRadius: '0.625rem',
					border: 'none',
					backgroundColor: 'rgb(221, 239, 255)',
					cursor: 'pointer',
				}}
			>
				Add movie
			</button>
		</div>
	);
};

export default Home;
