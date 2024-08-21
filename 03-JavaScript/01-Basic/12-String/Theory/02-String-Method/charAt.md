# Overview

- Description
- Syntax
- Parameters
- Return Value
- Example
- Browser Support

&nbsp;

&nbsp;

&nbsp;

# Description

The `charAt()` method returns the character at a specified index (position) in a string.

The index of the first character is 0, the second 1, ...

&nbsp;

&nbsp;

# Syntax

```js
string.charAt(index);
```

&nbsp;

&nbsp;

# Parameters

| Parameter | Description                            |
| --------- | -------------------------------------- |
| index     | Optional. Default = 0.                 |
|           | The index (position) of the character. |
|           |                                        |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                                                           |
| -------- | ------------------------------------------------------------------------------------- |
| A string | The character at the specified index. Empty string ("") if the index is out of range. |
|          |                                                                                       |

&nbsp;

&nbsp;

# Example

```js
let text1 = "HELLO WORLD";
console.log(text1.charAt(4)); // O
```

&nbsp;

&nbsp;

# Browser Support

`charAt()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers:
