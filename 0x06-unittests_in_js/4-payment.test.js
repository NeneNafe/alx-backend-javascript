const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Spies', function () {
    it('has the same math', () => {
        const stubutils = sinon.stub(Utils, 'calculateNumber');
        stubutils.returns(10);
        const spyConsole = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(stubutils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

        stubutils.restore();
        spyConsole.restore();
    });
});