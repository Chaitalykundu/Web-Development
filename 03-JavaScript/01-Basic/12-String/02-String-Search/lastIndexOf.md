# Description

The `lastIndexOf()` method returns the index (position) of the last occurrence of a specified value in a string.

The `lastIndexOf()` method searches the string from the end to the beginning.

The `lastIndexOf()` method returns the index from the beginning (position 0).

The `lastIndexOf()` method returns -1 if the value is not found.

The `lastIndexOf()` method is case sensitive.

&nbsp;

&nbsp;

# Syntax

```js
string.lastIndexOf(searchvalue, start);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| searchvalue | Required. The string to search for.                                    |
| start       | Optional. The position where to start. Default value is string length. |
|             |

&nbsp;

&nbsp;

# Example

```js
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index); // 21
```

&nbsp;

Both `indexOf()` and `lastIndexOf()` return `-1` if the text is not found

## Example

```js
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("John");
console.log(index); // -1
```

&nbsp;

Both `indexOf()` and `lastIndexOf()` methods accept a **second parameter** as the **starting position** for the search

The `lastIndexOf()` methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

## Example

```js
let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15); // 7
```

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| A number | The position where the search-value occurs. -1 if it never occurs. |

&nbsp;

&nbsp;

# Browser Support

`lastIndexOf()` is an `ECMAScript1 (ES1)` feature.

`ES1 (JavaScript 1997)` is fully supported in all browsers

&nbsp;

&nbsp;
