import { PrismaClient } from '@prisma/client';

export interface IContext {
	prisma: PrismaClient;
}

export const context: IContext = {
	prisma: new PrismaClient(),
};
