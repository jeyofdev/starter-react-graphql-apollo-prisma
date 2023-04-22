import { QueryResolvers } from '../__generated__/resolvers-types';
import { IContext } from '../context';
import MovieService from '../services/movies.service';

const queries: QueryResolvers = {
	Query: {
		movies: (_: never, __: never, context: IContext) =>
			MovieService.findAll(context.prisma),
	},
};

export default queries;
