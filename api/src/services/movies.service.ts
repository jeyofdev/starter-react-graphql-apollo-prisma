import {
	AddMovieMutationResponse,
	Movie,
} from '../__generated__/resolvers-types';
import datas from './index';

class MoviesService {
	movies: Movie[] = datas.movies;

	getMovies(): Movie[] {
		return this.movies;
	}

	async addMovie(movie: Movie): Promise<AddMovieMutationResponse> {
		this.movies.push(movie);

		return {
			code: '200',
			success: true,
			message: 'New movie added!',
			movie: this.movies[this.movies.length - 1],
		};
	}
}

export default MoviesService;
