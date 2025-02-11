# Overview

- [Overview](#overview)
- [Debugging](#debugging)
  - [Basic Usage](#basic-usage)
  - [Logging Multiple Values](#logging-multiple-values)
  - [Formatted Output](#formatted-output)
  - [Logging Objects and Arrays](#logging-objects-and-arrays)
  - [Using console.group() for Organized Logs](#using-consolegroup-for-organized-logs)
  - [Conditional Debugging](#conditional-debugging)
  - [Using console.warn() and console.error()](#using-consolewarn-and-consoleerror)
  - [console.trace() for Call Stack](#consoletrace-for-call-stack)
  - [Performance Debugging](#performance-debugging)
- [Debugging Best Practices](#debugging-best-practices)

&nbsp;

&nbsp;

# Debugging

Using `console.log()` for debugging is one of the simplest and most commonly used techniques in JavaScript.

It helps you track variable values, function calls, and program flow.

&nbsp;

&nbsp;

## Basic Usage

```js
let name = "John";
console.log(name); // Output: John
```

&nbsp;

&nbsp;

## Logging Multiple Values

```js
let age = 25;
console.log("Name:", name, "Age:", age); // Output: Name: John Age: 25
```

&nbsp;

&nbsp;

## Formatted Output

```js
console.log(`User: ${name}, Age: ${age}`); // Output: User: John, Age: 25
```

&nbsp;

&nbsp;

## Logging Objects and Arrays

```js
let user = { name: "Alice", age: 30 };
console.log(user); // Logs the entire object
console.table(user); // Logs data in table format
```

&nbsp;

```js
let numbers = [10, 20, 30];
console.table(numbers); // Prints array in table format
```

&nbsp;

&nbsp;

## Using console.group() for Organized Logs

```js
console.group("User Details");
console.log("Name:", name);
console.log("Age:", age);
console.groupEnd();
```

This creates a collapsible group in the console.

&nbsp;

&nbsp;

## Conditional Debugging

```js
if (age > 18) console.log("Adult");
```

&nbsp;

&nbsp;

## Using console.warn() and console.error()

```js
console.warn("This is a warning!");
console.error("This is an error!");
```

&nbsp;

&nbsp;

## console.trace() for Call Stack

```js
function demo() {
  console.trace("Trace log:");
}
demo();
```

&nbsp;

&nbsp;

## Performance Debugging

```js
console.time("Timer");

// Your code logic here
console.timeEnd("Timer");
```

This helps measure execution time.

&nbsp;

&nbsp;

# Debugging Best Practices

✅ Use descriptive log messages.

✅ Use console.table() for structured data.

✅ Group logs using console.group().

✅ Use console.trace() for stack tracing.

✅ Use console.warn() and console.error() for different log levels.
