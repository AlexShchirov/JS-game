import { NumberMagicUtil } from './number-magic-utill'; // Убедитесь, что путь и имя файла верны

describe('NumberMagicUtil', () => {
    let numberMagicUtil;

    beforeEach(() => {
        numberMagicUtil = new NumberMagicUtil();
    });

    test('should return a number within the specified range', () => {
        const minInclusive = 1;
        const maxInclusive = 10;
        const result = numberMagicUtil.getRandomNumber(minInclusive, maxInclusive);
        expect(result).toBeGreaterThanOrEqual(minInclusive);
        expect(result).toBeLessThanOrEqual(maxInclusive);
    });

    test('should throw an error if "minInclusive" is not a number', () => {
        expect(() => {
            numberMagicUtil.getRandomNumber('a', 10);
        }).toThrow('Both arguments must be numbers');
    });

    test('should throw an error if "maxInclusive" is not a number', () => {
        expect(() => {
            numberMagicUtil.getRandomNumber(1, 'b');
        }).toThrow('Both arguments must be numbers');
    });

    test('should throw an error if "minInclusive" is greater than "maxInclusive"', () => {
        expect(() => {
            numberMagicUtil.getRandomNumber(10, 1);
        }).toThrow('The "minInclusive" value must be less than or equal to the "maxInclusive" value');
    });

    test('should return an integer', () => {
        const minInclusive = 1;
        const maxInclusive = 10;
        const result = numberMagicUtil.getRandomNumber(minInclusive, maxInclusive);
        expect(Number.isInteger(result)).toBe(true);
    });

    test('should include the "minInclusive" value in the range', () => {
        const minInclusive = 1;
        const maxInclusive = 10;
        const results = new Set();
        for (let i = 0; i < 100; i++) {
            results.add(numberMagicUtil.getRandomNumber(minInclusive, maxInclusive));
        }
        expect(results.has(minInclusive)).toBe(true);
    });

    test('should include the "maxInclusive" value in the range', () => {
        const minInclusive = 1;
        const maxInclusive = 10;
        const results = new Set();
        for (let i = 0; i < 100; i++) {
            results.add(numberMagicUtil.getRandomNumber(minInclusive, maxInclusive));
        }
        expect(results.has(maxInclusive)).toBe(true);
    });

    test('should handle the case when "minInclusive" and "maxInclusive" are the same', () => {
        const minInclusive = 5;
        const maxInclusive = 5;
        const result = numberMagicUtil.getRandomNumber(minInclusive, maxInclusive);
        expect(result).toBe(minInclusive);
    });

    test('should handle negative numbers', () => {
        const minInclusive = -10;
        const maxInclusive = -1;
        const result = numberMagicUtil.getRandomNumber(minInclusive, maxInclusive);
        expect(result).toBeGreaterThanOrEqual(minInclusive);
        expect(result).toBeLessThanOrEqual(maxInclusive);
    });

    test('should handle large ranges', () => {
        const minInclusive = 0;
        const maxInclusive = 1000000;
        const result = numberMagicUtil.getRandomNumber(minInclusive, maxInclusive);
        expect(result).toBeGreaterThanOrEqual(minInclusive);
        expect(result).toBeLessThanOrEqual(maxInclusive);
    });
});