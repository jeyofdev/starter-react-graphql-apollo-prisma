import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { IContext, context } from './context';

const runServer = async () => {
	const typeDefs = readFileSync('./src/schema/schema.graphql', {
		encoding: 'utf-8',
	});

	const resolvers = {
		// Query: {
		// 	books: () => books,
		// },
	};

	const server = new ApolloServer<IContext>({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		context: async () => context,
		listen: { port: 4000 },
	});

	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at: ${url}`);
};

runServer();
