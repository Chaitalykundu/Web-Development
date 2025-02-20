# Overview

- [Overview](#overview)
- [Description](#description)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Example](#example)
- [Return Value](#return-value)
- [Browser Support](#browser-support)

&nbsp;

&nbsp;

&nbsp;

# Description

The `includes()` method returns true if a string contains a specified string.

Otherwise it returns false.

The `includes()` method is case sensitive.

&nbsp;

&nbsp;

# Syntax

```js
string.includes(searchvalue, start);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                                               |
| ----------- | --------------------------------------------------------- |
| searchvalue | Required. The string to search for.                       |
| start       | Optional. The position to start from. Default value is 0. |
|             |

&nbsp;

&nbsp;

# Example

```js
let text2 = "Hello world, welcome to the universe.";
console.log(text2.includes("world")); // true
```

&nbsp;

Check if a string includes "world". Start at position 12:

```js
let text = "Hello world, welcome to the universe.";
text.includes("world", 12); //false
```

&nbsp;

&nbsp;

# Return Value

| Type      | Description                                             |
| --------- | ------------------------------------------------------- |
| A boolean | true if the string contains the value, otherwise false. |

&nbsp;

&nbsp;

# Browser Support

`includes()` is an `ECMAScript6 (ES6)` feature.

`ES6 (JavaScript 2015)` is supported in all modern browsers

`includes()` is not supported in Internet Explorer 11 (or earlier).
