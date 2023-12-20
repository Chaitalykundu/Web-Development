# Conditional statements

Conditional statements are used to perform different actions based on different conditions.

Sometimes we need to execute block of code based on some condition. At that time condition statement is used.

If the condition is true then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition.

&nbsp;

In JavaScript we have the following conditional statements:

- Use `if`, if we need to check only one condition
- Use `else`, if we need to check two conditions
- Use `else if`, if we need to check more than two conditions
- Use `switch` to specify many alternative blocks of code to be executed

&nbsp;

&nbsp;

# The `if` Statement

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

## Syntax

```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```

&nbsp;

## Example

Make a "Good day" greeting if the hour is less than 18:00:

```js
if (hour < 18) {
  greeting = "Good day";
}
// Output: Good day
```

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

## The else if Statement / if-else ladder

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

# Ternary operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

This operator is frequently used as an alternative to an if...else statement.

&nbsp;

## Syntax

```js
condition ? exp1 : exp2;
```

&nbsp;

## Example

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

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

### This is how it works:

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
