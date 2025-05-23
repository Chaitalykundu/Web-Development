# Overview

- [Overview](#overview)
- [The else if Statement / if-else ladder](#the-else-if-statement--if-else-ladder)
  - [Syntax](#syntax)
  - [Example](#example)

&nbsp;

&nbsp;

# The else if Statement / if-else ladder

Use the `else if` statement to specify a new condition if the first condition is false.

&nbsp;

## Syntax

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

&nbsp;

## Example

If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Output : Good day
```

&nbsp;

&nbsp;
