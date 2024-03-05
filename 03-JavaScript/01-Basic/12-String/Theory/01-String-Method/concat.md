# Description

The `concat()` method joins two or more strings.

The `concat()` method does not change the existing strings.

The `concat()` method returns a new string.

&nbsp;

&nbsp;

# Syntax

```js
string.concat(string1, string2, ..., stringX)

```

&nbsp;

&nbsp;

# Parameters

| Parameter            | Description                         |
| -------------------- | ----------------------------------- |
| more than one string | Required. The strings to be joined. |
|                      |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                   |
| -------- | --------------------------------------------- |
| A string | A new string containing the combined strings. |

&nbsp;

&nbsp;

# Example

```js
const fname = " Chaitaly";
const greeting = "Good Morning";

console.log(greeting.concat(fname)); // Good Morning Chaitaly
```

&nbsp;

&nbsp;

# Browser Support

`concat()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers
