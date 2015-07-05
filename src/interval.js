/**
 * Interval.
 * @author Vagner do Carmo <vluzrmos@gmail.com>
 */
var Interval = {
    /**
     * Test if a given number is in the interval.
     * @param {Number} value
     * @param {String} interval
     * @returns {boolean}
     */
    test: function (value, interval) {
        var numbers = this.parseNumbersFromInterval(interval);

        var types = {
            'setOfNumbers' : /^\{.*\}$/,
            'bothExclusive': /^(\(|\]|\)).*(\)|\[|\()$/,
            'bothInclusive': /^\[.*\]$/,
            'leftInclusive': /^\[.*(\)|\[|\()$/,
            'rightInclusive': /^(\(|\]|\)).*\]$/
        };

        if (interval.match(types.setOfNumbers)) {
            return numbers.indexOf(value) != -1;
        }

        if (interval.match(types.bothInclusive)) {
            return value >= numbers[0] && value <= numbers[1];
        }

        if (interval.match(types.bothExclusive)) {
            return value > numbers[0] && value < numbers[1];
        }

        if (interval.match(types.rightInclusive)) {
            return value > numbers[0] && value <= numbers[1];
        }

        if (interval.match(types.leftInclusive)) {
            return value >= numbers[0] && value < numbers[1];
        }
    },

    /**
     * Parse a given string to number.
     * @param {String} str
     * @returns {Number}
     */
    parseNumber: function (str){
        str = str.replace(/Inf\s*?$/i, 'Infinity');

        return Number(str);
    },

    /**
     * Parse a given interval into array of numbers.
     * @param {String} interval
     * @returns {Array}
     */
    parseNumbersFromInterval: function (interval) {
        var braces = /\[|\]|\{|\}|\(|\)/g;
        var numbers = interval.replace(braces, '').split(/,\s?/);
        var self = this;

        return numbers.map(function (str) {
           return self.parseNumber(str);
        });
    }
};