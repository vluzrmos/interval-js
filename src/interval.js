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
        root.Interval = new (factory())();
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
     * @returns {Boolean}
     */
    Interval.prototype.test = function (value, interval) {
        var numbers = this.parseNumbersFromInterval(interval);

        if (this.isSetOfNumbers(interval)) {
            return numbers.indexOf(value) != -1;
        }

        if (this.isBothInclusive(interval)) {
            return value >= numbers[0] && value <= numbers[1];
        }

        if (this.isBothExclusive(interval)) {
            return value > numbers[0] && value < numbers[1];
        }

        if (this.isRightInclusive(interval)) {
            return value > numbers[0] && value <= numbers[1];
        }

        if (this.isLeftInclusive(interval)) {
            return value >= numbers[0] && value < numbers[1];
        }

        return false;
    };

    /**
     * Check if a given interval is set of numbers.
     * @param {String} interval
     * @return {Boolean}
     */
    Interval.prototype.isSetOfNumbers = function (interval) {
        return Interval.types.setOfNumbers.test(interval)
    };

    /**
     * Check if a given interval is both side exclusive.
     * @param {String} interval
     * @return {Boolean}
     */
    Interval.prototype.isBothExclusive = function (interval) {
        return Interval.types.bothExclusive.test(interval);
    };

    /**
     * Check if a given interval is both side inclusive.
     * @param {String} interval
     * @return {Boolean}
     */
    Interval.prototype.isBothInclusive = function (interval) {
        return Interval.types.bothInclusive.test(interval);
    };

    /**
     * Check if a given interval is left side inclusive.
     * @param {String} interval
     * @return {Boolean}
     */
    Interval.prototype.isLeftInclusive = function (interval) {
        return Interval.types.leftInclusive.test(interval);
    };

    /**
     * Check if a given interval is right side inclusive.
     * @param {String} interval
     * @return {Boolean}
     */
    Interval.prototype.isRightInclusive = function (interval) {
        return Interval.types.rightInclusive.test(interval);
    };

    /**
     * Parse a given string to number.
     * @param {String} str
     * @returns {Number}
     */
    Interval.prototype.parseNumber = function (str) {
        str = (str + '').replace(/Inf\s*?$/i, 'Infinity');

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
