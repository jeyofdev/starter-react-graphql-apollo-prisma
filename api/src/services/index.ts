import { Movie } from '../__generated__/resolvers-types';

const moviesData: Movie[] = [
	{
		id: '1',
		title: 'Avatar',
		duration: 162,
	},
	{
		id: '2',
		title: 'Avengers: Infinity War',
		duration: 149,
	},
];

export default {
	movies: moviesData,
};
