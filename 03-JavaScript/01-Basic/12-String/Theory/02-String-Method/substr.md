# Overview

- [Overview](#overview)
- [Description](#description)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Return Value](#return-value)
- [Example](#example)
- [Browser Support](#browser-support)

&nbsp;

&nbsp;

&nbsp;

# Description

The `substr()` method extracts a part of a string.

The `substr()` method begins at a specified position, and returns a specified number of characters.

The `substr()` method does not change the original string.

To extract characters from the end of the string, use a negative start position

&nbsp;

&nbsp;

# Syntax

```js
string.substr(start, length);
```

&nbsp;

&nbsp;

# Parameters

| Parameter | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| start     | Required.                                                         |
|           | First character is at index 0.                                    |
|           | If start is greater than the length, substr() returns "".         |
|           | If start is negative, substr() counts from the end of the string. |
| end       | Optional.                                                         |
|           | The number of characters to extract.                              |
|           | If omitted, it extracts the rest of the string                    |
|           |                                                                   |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                              |
| -------- | -------------------------------------------------------- |
| A string | containing the extracted part.                           |
|          | If length is 0 or negative, an empty string is returned. |
|          |                                                          |

&nbsp;

&nbsp;

# Example

```js
let text = "Hello world!";

let result = text.substr(0, 1); // Only the first
let result = text.substr(text.length - 1, 1); // Only the last
let result = text.substr(-6, 6); // The last 6
```

&nbsp;

&nbsp;

# Browser Support

`substr()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;
