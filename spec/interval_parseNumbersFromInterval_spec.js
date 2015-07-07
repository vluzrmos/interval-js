'use strict';

var Interval = require('../src/interval');

describe('Testing Interval.parseNumbersFromInterval', function () {
    it('Should be an Array.', function() {
        expect(Interval.parseNumbersFromInterval("{1,2, 3,4}")).toEqual([1, 2, 3, 4]);
        expect(Interval.parseNumbersFromInterval("[1,2]")).toEqual([1, 2]);
        expect(Interval.parseNumbersFromInterval("[1,2)")).toEqual([1, 2]);
        expect(Interval.parseNumbersFromInterval("(1,2)")).toEqual([1, 2]);
        expect(Interval.parseNumbersFromInterval(")1,2(")).toEqual([1, 2]);
        expect(Interval.parseNumbersFromInterval("]1,2[")).toEqual([1, 2]);
        expect(Interval.parseNumbersFromInterval("]1,2)")).toEqual([1, 2]);
        expect(Interval.parseNumbersFromInterval("]1   ,   2)")).toEqual([1, 2]);
        expect(Interval.parseNumbersFromInterval("    ]   1   ,   2)   ")).toEqual([1, 2]);
    });

    it('Should be an Array and contains Infinity.', function() {
        expect(Interval.parseNumbersFromInterval("{1,2,3,Inf}")).toEqual([1, 2, 3, Infinity]);
        expect(Interval.parseNumbersFromInterval("[1,Inf]")).toEqual([1, Infinity]);
        expect(Interval.parseNumbersFromInterval("[1,Inf)")).toEqual([1, Infinity]);
        expect(Interval.parseNumbersFromInterval("(1, Infinity)")).toEqual([1, Infinity]);
        expect(Interval.parseNumbersFromInterval(")1,Inf(")).toEqual([1, Infinity]);
        expect(Interval.parseNumbersFromInterval("]-Infinity,Inf[")).toEqual([-Infinity, Infinity]);
        expect(Interval.parseNumbersFromInterval("]   1   ,   Infinity  )")).toEqual([1, Infinity]);
    })
});
