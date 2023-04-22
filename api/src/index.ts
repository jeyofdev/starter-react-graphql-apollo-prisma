import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import 'dotenv/config';
import { IContext, context } from './context';
import resolvers from './resolvers';

const { PORT } = process.env;

const runServer = async () => {
	if (!PORT) {
		throw new Error(
			'The environment variable FRONT_URL and MOBILE_URL must be specified',
		);
	}

	const typeDefs = readFileSync('./src/schema/schema.graphql', {
		encoding: 'utf-8',
	});

	const server = new ApolloServer<IContext>({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		context: async () => context,
		listen: { port: Number(PORT) },
	});

	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at: ${url}`);
};

runServer();
