# Description

The `trim()` method removes whitespace from both sides of a string.

The `trim()` method does not change the original string.

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```js
string.trim();
```

&nbsp;

&nbsp;

# Parameters

NONE

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                      |
| -------- | ------------------------------------------------ |
| A string | A string with removed whitespace from both ends. |

&nbsp;

&nbsp;

# Example

```js
const firstname = "            Chaitaly           ";
const lastName = "Kundu";
console.log(firstname, lastName); //            Chaitaly            Kundu
console.log(firstname.trim(), lastName); //Chaitaly Kundu

// Remove spaces with replace() using a regular expression:

let text = "       Hello World!        ";
let result = text.replace(/^\s+|\s+$/gm, "");
```

&nbsp;

&nbsp;

# Browser Support

`trim()` is an `ECMAScript5 (ES5)` feature.

ES5 (JavaScript 2009) fully supported in all browsers:
