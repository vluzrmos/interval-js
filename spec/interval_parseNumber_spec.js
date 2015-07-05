'use strict';

var Interval = require('../src/interval');

describe('Testing Interval.parseNumber().', function () {
    it('Should be Positive Infinity', function () {
        expect(Interval.parseNumber('+Inf')).toEqual(Infinity);
        expect(Interval.parseNumber('Inf')).toEqual(Infinity);
        expect(Interval.parseNumber('+Infinity')).toEqual(Infinity);
        expect(Interval.parseNumber('Infinity')).toEqual(Infinity);
    });

    it('Should be Negative Infinity', function () {
        expect(Interval.parseNumber('-Inf')).toEqual(-Infinity);
        expect(Interval.parseNumber('-Infinity')).toEqual(-Infinity);
    });

    it('Should be the proper number', function() {
        expect(Interval.parseNumber(1)).toEqual(1);
        expect(Interval.parseNumber('2')).toEqual(2);
        expect(Interval.parseNumber('-3')).toEqual(-3);
        expect(Interval.parseNumber('-4.5')).toEqual(-4.5);
    })
});
