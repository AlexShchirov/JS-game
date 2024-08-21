export class NumberMagicUtil {
    getRandomNumber(minInclusive, maxInclusive) {
        if (typeof minInclusive !== 'number' || typeof maxInclusive !== 'number') {
            throw new Error('Both arguments must be numbers');
        }
        if (minInclusive > maxInclusive) {
            throw new Error('The "minInclusive" value must be less than or equal to the "maxInclusive" value');
        }
        return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
    }
}