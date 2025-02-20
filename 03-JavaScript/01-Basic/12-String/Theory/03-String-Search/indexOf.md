# Overview

- [Overview](#overview)
- [Description](#description)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Example](#example)
- [Return Value](#return-value)
- [Browser Support](#browser-support)
- [The Difference Between String `indexOf()` and String `search()`](#the-difference-between-string-indexof-and-string-search)

&nbsp;

&nbsp;

&nbsp;

# Description

The `indexOf()` method returns the index (position) of the **first occurrence** of a specified text in a string

The `indexOf()` method returns `-1` if the value is not found.

The `indexOf()` method is case sensitive.
&nbsp;

&nbsp;

# Syntax

```js
string.indexOf(searchvalue, start);
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
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index); // 7
```

&nbsp;

`indexOf()` returns `-1` if the text is not found

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("John");
console.log(index); // -1
```

&nbsp;

`indexOf()` accepts a **second parameter** as the **starting position** for the search

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
console.log(index); // 21
```

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| A number | The first position where the search-value occurs. -1 if it never occurs. |

&nbsp;

&nbsp;

# Browser Support

`indexOf()` is an `ECMAScript1 (ES1)` feature.

`ES1 (JavaScript 1997)` is fully supported in all browsers

&nbsp;

&nbsp;

# The Difference Between String `indexOf()` and String `search()`

The `indexOf()` method cannot search against a regular expression.

The `search()` cannot take a start position argument.
