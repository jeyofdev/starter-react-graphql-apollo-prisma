import { Movie, MutationResolvers } from '../__generated__/resolvers-types';
import { IContext } from '../context';

const mutations: MutationResolvers = {
	Mutation: {
		addMovie: async (_: never, args: Movie, context: IContext) =>
			context.dataSource.movie.addMovie(args),
	},
};

export default mutations;
