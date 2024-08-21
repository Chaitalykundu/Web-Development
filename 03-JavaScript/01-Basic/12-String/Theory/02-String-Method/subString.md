# Description

The `substring()` method extracts characters, between two indices (positions), from a string, and returns the substring.

The `substring()` method extracts characters from start to end (exclusive).

The `substring()` method does not change the original string.

If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

Start or end values less than 0, are treated as 0.

&nbsp;

&nbsp;

# Syntax

```js
string.substring(start);
string.substring(start, end);
```

&nbsp;

&nbsp;

# Parameters

| Parameter | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| start     | Required. The start position. (First character is 0).                                      |
| end       | Optional. The end position (up to, but not including). If omitted: the rest of the string. |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                   |
| -------- | --------------------------------------------- |
| A string | A string containing the extracted characters. |

&nbsp;

&nbsp;

# Example

Extract a substring from text:

```js
let text = "Hello world!";
let result = text.substring(1, 4);

document.getElementById("demo").innerHTML = result; //ell
```

&nbsp;

&nbsp;

# Browser Support

`substring()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers
