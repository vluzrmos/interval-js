'use strict';

var Interval = require('../src/interval');

describe('Testing Interval.test', function () {
    it('Should be truth.', function() {
        expect(Interval.test(1, "{1,2, 3,4}")).toEqual(true);
        expect(Interval.test(1, "[1,2]")).toEqual(true);
        expect(Interval.test(1, " [1,2]")).toEqual(true);
        expect(Interval.test(1, " [1,2] ")).toEqual(true);
        expect(Interval.test(1, " [  1, 2] ")).toEqual(true);
        expect(Interval.test(1, " [1,2  ] ")).toEqual(true);
        expect(Interval.test(1, " [ 1 , 2 ] ")).toEqual(true);
        expect(Interval.test(1, "[1,2)")).toEqual(true);
        expect(Interval.test(1, "(1,2)")).toEqual(false);
        expect(Interval.test(1, ")1,2(")).toEqual(false);
        expect(Interval.test(1, "]1,2[")).toEqual(false);
        expect(Interval.test(1, "]1,2)")).toEqual(false);
        expect(Interval.test(1, "]-Inf,Inf)")).toEqual(true);
        expect(Interval.test(1, "]1,Inf)")).toEqual(false);
        expect(Interval.test(1, ")1,Inf)")).toEqual(false);
        expect(Interval.test(1, "(1,Inf)")).toEqual(false);
        expect(Interval.test(-2, "[1, Inf)")).toEqual(false);
    });
});
