const { calculateNumber } = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding up a', () => {
        assert.equal(calculateNumber(2.4, 1), 3);
        assert.equal(calculateNumber(1.3, 0), 1);
        assert.equal(calculateNumber(15.65, 3), 19)
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(1, 2.4), 3);
        assert.equal(calculateNumber(0, 1.3), 1);
        assert.equal(calculateNumber(3, 15.65), 19);
    });

    it('the summing of both numbers', () => {
        assert.equal(calculateNumber(1.6, 2.4), 4);
        assert.equal(calculateNumber(0.1, 1.3), 1);
        assert.equal(calculateNumber(15.65, 3.4), 19);
    });
})
