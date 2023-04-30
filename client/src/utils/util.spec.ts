import { describe, expect, it } from 'vitest';
import sayHello from '.';

describe('', () => {
	it('function sayHello return string HELLO', () => {
		expect(sayHello('Hello')).toBe('HELLO');
	});

	it('return the addition between 2 numbers', () => {
		expect(1 + 1).toBe(2);
	});
});
