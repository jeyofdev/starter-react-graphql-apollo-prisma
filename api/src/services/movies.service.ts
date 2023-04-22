import { PrismaClient } from '@prisma/client';
import {
	AddMovieMutationResponse,
	Movie,
} from '../__generated__/resolvers-types';

class MoviesService {
	static findAll(prismaClient: PrismaClient): Promise<Movie[]> {
		return prismaClient.movie.findMany();
	}

	static async add(
		prismaClient: PrismaClient,
		movie: Movie,
	): Promise<AddMovieMutationResponse> {
		const newMovie = await prismaClient.movie.create({
			data: {
				title: movie.title,
				duration: movie.duration,
			},
		});

		return {
			code: '200',
			success: true,
			message: 'New movie added 😉',
			movie: newMovie,
		};
	}
}

export default MoviesService;
