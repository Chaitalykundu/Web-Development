# Overview

- Description
- Note
- Syntax
- Example
- Parameters
- Return Value
- Browser Support

&nbsp;

&nbsp;

&nbsp;

# Description

The `toString()` returns a number as a string.

&nbsp;

&nbsp;

# Note

Every JavaScript object has a `toString()` method.

The `toString()` method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.

Normally, you will not use it in your own code.

&nbsp;

&nbsp;

# Syntax

```js
number.toString(radix);
```

&nbsp;

&nbsp;

# Example

```js
let num = 15;
console.log(num.toString());
```

&nbsp;

Convert a number to a string, using base 2 (Binary):

```js
console.log(num.toString(2));
```

&nbsp;

Convert a number to a string, using base 8 (Octal):

```js
console.log(num.toString(8));
```

&nbsp;

Convert a number to a string, using base 16 (Hexadecimal):

```js
console.log(num.toString(16));
```

&nbsp;

&nbsp;

# Parameters

| Parameter | Description                          |
| --------- | ------------------------------------ |
| radix     | Optional.                            |
|           | The base to use.                     |
|           | Must be an integer between 2 and 36. |
|           | Base 2 is binary                     |
|           | Base 8 is octal                      |
|           | Base 16 is hexadecimal.              |
|           |                                      |

&nbsp;

&nbsp;

# Return Value

| Type     | Description             |
| -------- | ----------------------- |
| A string | The number as a string. |

&nbsp;

&nbsp;

# Browser Support

`toString()` is an ECMAScript1 (ES1) feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;
