# Math Interval

Check if a given number match with a math interval.

# Install 

You just download the source [zip](https://github.com/vluzrmos/interval-js/archive/master.zip).

Or if you want:

NPM:

`npm install math-interval-js`.

Bower:

`bower install math-interval-js`.


# Usage

Simple: 

```js
var interval = "[1,2]";

Interval.test(1, interval);
// true

Interval.test(3, interval);
// false
```

Set of numbers:

```js
var interval = "{1,3,5,7}";

Interval.test(2, interval);
// false

Interval.test(3, interval);
// true
```

Infinity:

```js
var interval = "[1, Inf)";

Interval.test(-2, interval);
// false

Interval.test(400, interval);
// true
```

```js
var interval = "(-Inf, Inf)";

Interval.test(-2, interval);
// true

Interval.test(1000, interval);
// true
```


Simple excluded:

```js
var interval = "(-2, 2)";

Interval.test(-2, interval);
// false

Interval.test(2, interval);
// false

Interval.test(0, interval);
// true

Interval.test(1, interval);
// true
```

# Importing

On nodejs:

```js
var Interval = require('math-interval-js');
```

On you html files:

```html
<script src="/path/to/that/package/src/interval.js"></script>
```

