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

The `replace()` method of `String` values returns a new string with one, some, or all matches of a pattern replaced by a `replacement`.

The pattern can be a `string` or a `RegExp`, and the replacement can be a string or a function called for each match.

The `replace()` method searches a string for a value or a regular expression.

The `replace()` method returns a new string with the value(s) replaced.

The `replace()` method does not change the original string.

If pattern is a string, only the first occurrence will be replaced.

&nbsp;

# Note

If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.

&nbsp;

&nbsp;

# Syntax

```js
string.replace(searchValue, newValue);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                                                |
| ----------- | ---------------------------------------------------------- |
| searchValue | Required. The value, or regular expression, to search for. |
| newValue    | Required. The new value (to replace with).                 |
|             |                                                            |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| A string | A new string where the specified value(s) has been replaced. |
|          |                                                              |

&nbsp;

&nbsp;

# Example

```js
let fruit = "banana";
console.log(fruit.replace("banana", "apple")); // apple

console.log(fruit); // banana

// A global replacement
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/g, "red");
```

&nbsp;

If pattern is a string, only the first occurrence will be replaced.

```js
let str1 = "i am Chaitaly. i am a Software Engineer.";
console.log(str1.replace("i", "I")); // I am Chaitaly. i am a Software Engineer.
```

&nbsp;

&nbsp;

# Browser Support

`replace()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers
