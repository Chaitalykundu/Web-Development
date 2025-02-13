# Overview

- [Overview](#overview)
- [The `else` Statement](#the-else-statement)
  - [Syntax](#syntax)
  - [Example](#example)

&nbsp;

&nbsp;

# The `else` Statement

Use the `else` statement to specify a block of code to be executed if the condition is false.

&nbsp;

## Syntax

```js
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

&nbsp;

## Example

If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

```js
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Output : Good day
```

&nbsp;

&nbsp;
