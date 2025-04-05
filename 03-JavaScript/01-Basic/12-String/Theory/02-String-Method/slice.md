# Overview

- [Overview](#overview)
- [Description](#description)
  - [Note](#note)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Return Value](#return-value)
- [Example](#example)
- [Browser Support](#browser-support)

&nbsp;

&nbsp;

&nbsp;

# Description

The `slice()` method extracts a part of a string.

The `slice()` method returns the extracted part in a new string.

The `slice()` method does not change the original string.

The start and end parameters specifies the part of the string to extract.

&nbsp;

## Note

A negative number selects from the end of the string.

For example, `str.slice(-7,5)` means it will be started from 7th position from the right to left and the will count upto 5th index towards right.

&nbsp;

&nbsp;

# Syntax

```js
string.slice(start, end);
string.slice(start);
```

&nbsp;

&nbsp;

# Parameters

| Parameter | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| start     | Required. The start position. (First character is 0).                            |
| end       | Optional. The end position (up to, but not including). Default is string length. |
|           |                                                                                  |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                       |
| -------- | --------------------------------- |
| A string | The extracted part of the string. |
|          |                                   |

&nbsp;

&nbsp;

# Example

```js
let fname = "Chaitaly";

// From position 2 to the 7
console.log(fname.slice(2, 7)); //aital

// From position 5 to the end
console.log(fname.slice(5)); //aly

// From 2nd to 5th character
console.log("slice,", n.slice(-7, 5)); // hait

console.log("slice,", n.slice(-7, -4)); // hai

// Only the last character
console.log(fname.slice(-1)); //y
```

&nbsp;

&nbsp;

# Browser Support

`slice()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers
