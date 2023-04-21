import BooksService from '../services/books.service';

export interface IContext {
	dataSource: {
		books: BooksService;
	};
}

export const context: IContext = {
	dataSource: {
		books: new BooksService(),
	},
};
