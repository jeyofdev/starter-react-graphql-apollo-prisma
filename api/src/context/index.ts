import MoviesService from '../services/movies.service';

export interface IContext {
	dataSource: {
		movie: MoviesService;
	};
}

export const context: IContext = {
	dataSource: {
		movie: new MoviesService(),
	},
};
