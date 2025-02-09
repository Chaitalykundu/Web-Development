# Overview

- [Overview](#overview)
- [Description](#description)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Examples](#examples)
- [Browser Support](#browser-support)

&nbsp;

&nbsp;

&nbsp;

# Description

The `assert()` method writes a message to the console if an expression evaluates to false.

&nbsp;

&nbsp;

# Syntax

```js
console.assert(expression, message);
```

&nbsp;

&nbsp;

# Parameters

| Parameters | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| expression | Required                                                                   |
|            | Any expression.                                                            |
|            | If the expression evaluates to false, a message is written in the console. |
| message    | Optional.                                                                  |
|            | The message to write in the console.                                       |

&nbsp;

&nbsp;

# Examples

```js
let x = 2,
  y = 3;

console.assert(x + y == 11, "Expression returned false");

// This will show the assertion message "Expression returned false"
```

&nbsp;

```js
let x = 2,
  y = 3;

console.assert(x > y); // This will not show any assertion message
```

&nbsp;

&nbsp;

# Browser Support

`console.assert()` is supported in all browsers:

&nbsp;

&nbsp;

&nbsp;
