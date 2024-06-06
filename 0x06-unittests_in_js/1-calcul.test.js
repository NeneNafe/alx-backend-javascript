const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('#calculateNumber() with type SUM', () => {
    it('add 3 and 5', () => {
        assert.equal(calculateNumber('SUM', 3, 5), 8);
    });
    it('add 10 and 3', () => {
        assert.equal(calculateNumber('SUM', 10, 3), 13);
    });
    it('add 3.3 and 1.7', () => {
        assert.equal(calculateNumber('SUM', 3.3, 1.7), 5);
    });
    it('add -0.1 and 0.1', () => {
        assert.equal(calculateNumber('SUM', -0.1, 0.1), 0);
    });
});

describe('#calculateNumber() with type SUBTRACT', () => {
    it('subtract 3 and 5', () => {
        assert.equal(calculateNumber('SUBTRACT', 3, 5), -2);
    });
    it('subtract 10 and 3', () => {
        assert.equal(calculateNumber('SUBTRACT', 10, 3), 7);
    });
    it('subtract 3.3 and 1.7', () => {
        assert.equal(calculateNumber('SUBTRACT', 3.3, 1.7), 1);
    });
    it('subtract -0.1 and 0.1', () => {
        assert.equal(calculateNumber('SUBTRACT', -0.1, 0.1), 0);
    });
});

describe('#calculateNumber() with type DIVIDE', () => {
    it('divide 15 and 5', () => {
        assert.equal(calculateNumber('DIVIDE', 15, 5), 3);
    });
    it('divide 10 and 2', () => {
        assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
    });
    it('divide 3.3 and 3.3', () => {
        assert.equal(calculateNumber('DIVIDE', 3.3, 3.3), 1);
    });
    it('divide 75 and 3', () => {
        assert.equal(calculateNumber('DIVIDE', 75, 3), 25);
    });
    it('divide 1.4 and 0', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    });
});