# Overview

- [Overview](#overview)
- [Switch case](#switch-case)
  - [Syntax](#syntax)
    - [This is how it works](#this-is-how-it-works)
  - [Example](#example)
- [Switching Details](#switching-details)

&nbsp;

&nbsp;

# Switch case

The `switch` statement is used to perform different actions based on different conditions.

Use the switch statement to select one of many code blocks to be executed.

&nbsp;

## Syntax

```js
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

&nbsp;

### This is how it works

The switch expression is evaluated once.

The value of the expression is compared with the values of each case.

If there is a match, the associated block of code is executed.

If there is no match, the default code block is executed.

&nbsp;

## Example

The `getDay()` method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:

```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// Output : Wednesday
```

&nbsp;

# Switching Details

If multiple cases matches a case value, the `first` case is selected.

If no matching cases are found, the program continues to the `default` label.

If no default label is found, the program continues to the statement(s) `after the switch`.

&nbsp;
