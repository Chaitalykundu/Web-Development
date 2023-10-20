# Description

The `Math.random()` method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

`Math.random()` generates a random number .

&nbsp;

&nbsp;

# Note

`Math.random()` used with `Math.floor()` can be used to return random integers.

&nbsp;

&nbsp;

# Syntax

```js
Math.random();
```

&nbsp;

&nbsp;

# Parameters

NONE

&nbsp;

&nbsp;

# Return Value

| Type   | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| Number | A random number from 0 (inclusive) up to but not including 1 (exclusive). |

&nbsp;

&nbsp;

# Example

```js
let x = Math.random();
```

&nbsp;

Return a random number between 0 and 10:

```js
let x = Math.random() * 10;
```

&nbsp;

Return a random number between 0 and 100:

```js
let x = Math.random() * 100;
```

&nbsp;

A random whole number between 1 and 10:

```js
let x = Math.floor(Math.random() * 10 + 1);
```

&nbsp;

A random whole number between 1 and 100:

```js
let x = Math.floor(Math.random() * 100 + 1);
```

&nbsp;

&nbsp;

# Browser Support

`Math.random()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;
