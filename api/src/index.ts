import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

const runServer = async () => {
	const typeDefs = readFileSync('./src/schema/schema.graphql', {
		encoding: 'utf-8',
	});

	const books = [
		{
			id: '1',
			title: 'The Awakening',
			author: 'Kate Chopin',
			year: 2015,
		},
		{
			id: '2',
			title: 'City of Glass',
			author: 'Paul Auster',
			year: 2020,
		},
	];

	const resolvers = {
		Query: {
			books: () => books,
		},
	};

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	});

	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at: ${url}`);
};

runServer();
