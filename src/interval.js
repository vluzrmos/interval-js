'use strict';

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD support.
        define([], factory);
    } else if (typeof exports === 'object') {
        // NodeJS support.
        module.exports = new (factory())();
    } else {
        // Browser global support.
        root.Lang = new (factory())();
    }

}(this, function () {

    /**
     * Interval.
     * @author Vagner do Carmo <vluzrmos@gmail.com>
     * @link https://github.com/vluzrmos/interval-js
     */
    var Interval = function () {

    };

    Interval.types = {
        'setOfNumbers': /^\{.*\}$/,
        'bothExclusive': /^(\(|\]|\)).*(\)|\[|\()$/,
        'bothInclusive': /^\[.*\]$/,
        'leftInclusive': /^\[.*(\)|\[|\()$/,
        'rightInclusive': /^(\(|\]|\)).*\]$/
    };

    /**
     * Test if a given number is in the interval.
     * @param {Number} value
     * @param {String} interval
     * @returns {boolean}
     */
    Interval.prototype.test = function (value, interval) {
        var numbers = this.parseNumbersFromInterval(interval);

        if (interval.match(Interval.types.setOfNumbers)) {
            return numbers.indexOf(value) != -1;
        }

        if (interval.match(Interval.types.bothInclusive)) {
            return value >= numbers[0] && value <= numbers[1];
        }

        if (interval.match(Interval.types.bothExclusive)) {
            return value > numbers[0] && value < numbers[1];
        }

        if (interval.match(Interval.types.rightInclusive)) {
            return value > numbers[0] && value <= numbers[1];
        }

        if (interval.match(Interval.types.leftInclusive)) {
            return value >= numbers[0] && value < numbers[1];
        }
    };

    /**
     * Parse a given string to number.
     * @param {String} str
     * @returns {Number}
     */
    Interval.prototype.parseNumber = function (str) {
        str = (str+'').replace(/Inf\s*?$/i, 'Infinity');

        return Number(str);
    };

    /**
     * Parse a given interval into array of numbers.
     * @param {String} interval
     * @returns {Array}
     */
    Interval.prototype.parseNumbersFromInterval = function (interval) {
        var braces = /\[|\]|\{|\}|\(|\)/g;
        var numbers = interval.replace(braces, '').split(/,\s?/);
        var self = this;

        return numbers.map(function (str) {
            return self.parseNumber(str);
        });
    };

    return Interval;
}));
