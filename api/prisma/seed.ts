import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	// Delete all movies records
	await prisma.movie.deleteMany({});

	await prisma.movie.create({
		data: {
			title: 'Avatar: The Way of Water',
			duration: 192,
		},
	});

	await prisma.movie.create({
		data: {
			title: 'Iron man',
			duration: 126,
		},
	});
};

main().then(() => {
	// eslint-disable-next-line no-console
	console.log('Data created...');
});
