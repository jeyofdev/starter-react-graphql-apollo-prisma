cd client

cat <<EOT > src/components/Home.tsx
import { MoviesDocument, useAddMovieMutation, useMoviesQuery } from '@graphql/__generated__/graphql-type';
import sayHello from '@utils/index';

const Home = () => {
	const { data, loading, error } = useMoviesQuery()
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
		<div className='flex flex-col items-center'>
			<h1 className="text-2xl">{sayHello('Hello world')} !!!</h1>
			<button
				onClick={() =>
					addProject({ variables: { title: 'John Wick', duration: 101 } })
				}
				className='mt-4 py-2 px-4 rounded-lg border-none bg-blue-100 cursor-pointer'
			>
				Add movie
			</button>
		</div>
	);
};

export default Home;

EOT


cat <<EOT > src/App.tsx
import Home from '@components/Home';

const App = () => (
	<div
		className="flex justify-center items-center min-h-screen w-full"
	>
		<Home />
	</div>
);

export default App;

EOT

echo "✅ ✅ TailwindCss is used on components App and Home ✅ ✅"
