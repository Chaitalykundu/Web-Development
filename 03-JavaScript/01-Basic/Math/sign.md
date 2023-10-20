# Description

The `Math.sign()` method returns whether a number is negative, positive or zero.

&nbsp;

&nbsp;

# Syntax

```js
Math.sign(x);
```

&nbsp;

&nbsp;

# Parameters

| Parameter | Description         |
| --------- | ------------------- |
| x         | Required. A number. |

&nbsp;

&nbsp;

# Return Value

A Number, representing the sign of the specified number:

- If the number is positive, it returns 1
- If the number is negative, it returns -1
- If the number is positive zero, it returns 0
- If the number is negative zero, it returns -0
- If the number is not a number, it returns NaN

&nbsp;

&nbsp;

# Example

```js
let x = Math.sign(0);
```

&nbsp;

```js
let x = Math.sign(-3);
```

&nbsp;

```js
let x = Math.sign(7);
```

&nbsp;

&nbsp;

# Browser Support

`Math.sign()` is an ECMAScript6 (ES6) feature.

ES6 (JavaScript 2015) is supported in all modern browsers:

`Math.sign()` is not supported in Internet Explorer 11 (or earlier).

&nbsp;
