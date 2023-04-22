import { Movie, MutationResolvers } from '../__generated__/resolvers-types';
import { IContext } from '../context';
import MovieService from '../services/movies.service';

const mutations: MutationResolvers = {
	Mutation: {
		addMovie: async (_: never, args: Movie, context: IContext) =>
			MovieService.add(context.prisma, args),
	},
};

export default mutations;
