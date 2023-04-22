import { QueryResolvers } from '../__generated__/resolvers-types';
import { IContext } from '../context';

const queries: QueryResolvers = {
	Query: {
		movies: (_: never, __: never, context: IContext) =>
			context.dataSource.movie.getMovies(),
	},
};

export default queries;
