const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect
const sinon = require('sinon')
let value = 0
describe('Math class', function () {

    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function (done) {
        const math = new Math();
        value = 5
        math.sum(value,5, (value) => {
            expect(value).to.equal(10);
            done();
        })
    });

    it('Multiply two numbers', function() {
        const math = new Math();
        expect(math.multiply(value,5)).to.equal(0);
    })

    it.only('Calls req with sum and index values', function () {
        const req = {};
        const res = {
            load: sinon.fake()
        };
        const math = new Math;

        math.printSum(req, res, 5,5);

        expect(res.load.calledOnce).to.be.true;
    })
});