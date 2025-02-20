# Overview

- [Overview](#overview)
- [Description](#description)
  - [Note](#note)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Example](#example)
- [Return Value](#return-value)
- [Browser Support](#browser-support)
- [The Difference Between](#the-difference-between)
  - [String search() and String match()](#string-search-and-string-match)

&nbsp;

&nbsp;

&nbsp;

# Description

The `match()` method matches a string against a regular expression \*\*

The `match()` method returns an array with the matches.

The `match()` method returns null if no match is found.

&nbsp;

## Note

If the search value is a string, it is converted to a regular expression.

If a regular expression does not include the `g modifier` (global search), `match()` will return only the first match in the string.

&nbsp;

&nbsp;

# Syntax

```js
string.match(matchValue);
```

&nbsp;

&nbsp;

# Parameters

| Parameter  | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| matchValue | Required.                                                                          |
|            | The search value.                                                                  |
|            | A regular expression (or a string that will be converted to a regular expression). |

&nbsp;

&nbsp;

# Example

Perform a search for "ain":

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain"); //1 ain

// or using a regular expression
text.match(/ain/); //1 ain
```

&nbsp;

Perform a **global search** for "ain":

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g); //3 ain,ain,ain
```

&nbsp;

Perform a **global, case-insensitive search** for "ain":

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi); //4 ain,AIN,ain,ain
```

&nbsp;

&nbsp;

&nbsp;

# Return Value

| Type     | Description                      |
| -------- | -------------------------------- |
| An array | An array containing the matches. |
| or null  | null if no match is found.       |

&nbsp;

&nbsp;

# Browser Support

`match()` is an `ECMAScript1 (ES1)` feature.

`ES1 (JavaScript 1997)` is fully supported in all browsers

&nbsp;

&nbsp;

# The Difference Between

## String search() and String match()

The `search()` method returns the position of the first match.

The `match()` method returns an array of matches.

&nbsp;

&nbsp;
