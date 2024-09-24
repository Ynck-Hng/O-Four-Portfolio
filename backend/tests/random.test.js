import { expect, it, describe } from 'vitest';
const { random } = require('./../src/utils/random');

describe('Random', () => {
    it('should return a number between 0 and 10', () => {
        const randomNumber = random(0, 10);
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(10);
    });
});

