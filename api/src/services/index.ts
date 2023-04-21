import { Book } from '../__generated__/resolvers-types';

const booksData: Book[] = [
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

export default {
	books: booksData,
};
