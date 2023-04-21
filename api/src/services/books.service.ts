import {
	AddBookMutationResponse,
	Book,
} from '../__generated__/resolvers-types';
import datas from './index';

class BooksService {
	books: Book[] = datas.books;

	getBooks(): Book[] {
		return this.books;
	}

	async addBook(book: Book): Promise<AddBookMutationResponse> {
		this.books.push(book);

		return {
			code: '200',
			success: true,
			message: 'New book added!',
			book: this.books[this.books.length - 1],
		};
	}
}

export default BooksService;
