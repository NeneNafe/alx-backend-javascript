const chai = (await import('chai')).default;
const calculateNumber = (await import('./2-calcul_chai'));

describe('#calculateNumber() with type SUM', () => {
    it('add 3 and 5', () => {
        expect(calculateNumber('SUM', 3, 5)).to.equal(8);
    });
    it('add 10 and 3', () => {
        expect(calculateNumber('SUM', 10, 3)).to.equal(13);
    });
    it('add 3.3 and 1.7', () => {
        expect(calculateNumber('SUM', 3.3, 1.7)).to.equal(5);
    });
    it('add -0.1 and 0.1', () => {
        expect(calculateNumber('SUM', -0.1, 0.1)).to.equal(0);
    });
});

describe('#calculateNumber() with type SUBTRACT', () => {
    it('subtract 3 and 5', () => {
        expect(calculateNumber('SUBTRACT', 3, 5)).to.equal(2);
    });
    it('subtract 10 and 3', () => {
        expect(calculateNumber('SUBTRACT', 10, 3)).to.equal(7);
    });
    it('subtract 3.3 and 1.7', () => {
        expect(calculateNumber('SUBTRACT', 3.3, 1.7)).to.equal(1);
    });
    it('subtract -0.1 and 0.1', () => {
        expect(calculateNumber('SUBTRACT', -0.1, 0.1)).to.equal(0);
    });
});

describe('#calculateNumber() with type DIVIDE', () => {
    it('divide 15 and 5', () => {
        expect(calculateNumber('DIVIDE', 15, 5)).to.equal(3);
    });
    it('divide 10 and 2', () => {
        expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });
    it('divide 3.3 and 3.3', () => {
        expect(calculateNumber('DIVIDE', 3.3, 3.3)).to.equal(1);
    });
    it('divide 75 and 3', () => {
        expect(calculateNumber('DIVIDE', 75, 3)).to.equal(25);
    });
    it('divide 1.4 and 0', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});