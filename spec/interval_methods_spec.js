'use strict';

var Interval = require('../src/interval');

describe('All methods should exists', function () {
    it('Method test() should exists', function () {
        expect(Interval.test).toBeDefined();
    });

    it('Method parseNumber() should exists', function () {
        expect(Interval.parseNumber).toBeDefined();
    });

    it('Method parseNumbersFromInterval() should exists', function () {
        expect(Interval.parseNumbersFromInterval).toBeDefined();
    });
});
