# Math Interval JS

[![Join the chat at https://gitter.im/vluzrmos/interval-js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vluzrmos/interval-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://badge.fury.io/js/math-interval-js.svg)](https://www.npmjs.com/package/math-interval-js) [![Build Status](https://travis-ci.org/vluzrmos/interval-js.svg)](https://travis-ci.org/vluzrmos/interval-js)

Check if a given number match with a math interval.

# Install 

You just download the source [zip](https://github.com/vluzrmos/interval-js/archive/master.zip).

Or if you want:

[NPM](https://www.npmjs.com/package/math-interval-js):

`npm install math-interval-js`.

Bower:

`bower install math-interval-js`.


# Usage

Simple: 

```js
Interval.test(1, "[1,2]");
// true

Interval.test(3, "[1,2]");
// false
```

Set of numbers:

```js
Interval.test(2, "{1,3,5,7}");
// false

Interval.test(3, "{1,3,5,7}");
// true
```

Infinity:

```js
Interval.test(-2, "[1, Inf)");
// false

Interval.test(400, "[1, Inf)");
// true
```

```js
Interval.test(-2, "(-Inf, Inf)");
// true

Interval.test(1000, "(-Inf, Inf)");
// true
```


Simple excluded:

```js
Interval.test(-2, "(-2, 2)");
// false

Interval.test(2, "(-2, 2)");
// false

Interval.test(0, "(-2, 2)");
// true

Interval.test(1, "(-2, 2)");
// true
```

# Importing

NodeJS:

```js
var Interval = require('math-interval-js');
```

Html:

```html
<script src="/path/to/that/package/src/interval.js"></script>
```

