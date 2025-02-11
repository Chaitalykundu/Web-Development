# Overview

- [Overview](#overview)
- [Description](#description)
- [Note](#note)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Examples](#examples)
- [Browser Support](#browser-support)

&nbsp;

&nbsp;

&nbsp;

# Description

The `warn()` method writes a warning to the console.

&nbsp;

&nbsp;

# Note

When testing console methods, be sure to have the console view visible.

Press F12 to open the console view.

&nbsp;

&nbsp;

# Syntax

```js
console.warn(message);
```

&nbsp;

&nbsp;

# Parameters

| Parameters | Description                                    |
| ---------- | ---------------------------------------------- |
| message    | Required.                                      |
|            | The message (warning) to write to the console. |
|            |                                                |

&nbsp;

&nbsp;

# Examples

Use an object as the warning message:

```js
const myObj = { firstname: "John", lastname: "Doe" };
console.warn(myObj);
```

&nbsp;

&nbsp;

# Browser Support

`console.warn()` is supported in all browsers.
