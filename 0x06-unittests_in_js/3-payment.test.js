const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spies', function () {
    it('has the same math', () => {
        const spyutils = sinon.spy(Utils, 'calculateNumber');
        const spyConsole = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(spyutils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;

        spyutils.restore();
        spyConsole.restore();
    });
});