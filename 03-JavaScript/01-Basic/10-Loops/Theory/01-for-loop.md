# Overview

- [Overview](#overview)
- [for loop](#for-loop)
- [Flow Chart](#flow-chart)
- [Syntax](#syntax)
  - [Explanation](#explanation)
- [Example](#example)
- [When to Use a for Loop](#when-to-use-a-for-loop)
- [Loop Scope](#loop-scope)

&nbsp;

&nbsp;

&nbsp;

# for loop

A for loop repeats until a specified condition evaluates to false.

It is typically used when the **number of iterations is known** beforehand.

&nbsp;

&nbsp;

# Flow Chart

<img src="../../../assets/for_loop.jpg">

&nbsp;

&nbsp;

# Syntax

```js
for (initialization; condition; increment) {
  // code to be executed in each iteration;
}
```

&nbsp;

## Explanation

- <u>**Initialization**</u>: Executes once before the loop starts.
- <u>**Condition**</u>: Checked before each iteration; if true, the loop executes.
- <u>**Increment/Decrement**</u>: Updates the loop control variable after each iteration.

&nbsp;

&nbsp;

# Example

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
```

&nbsp;

```js
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

&nbsp;

&nbsp;

# When to Use a for Loop

- When the number of iterations is known beforehand.
- When iterating through arrays (though forEach and for...of can be better).
- When you need to increment or decrement a counter variable.

&nbsp;

&nbsp;

# Loop Scope

Using `var` in a loop:

```js
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
```

&nbsp;

Using `let` in a loop:

```js
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
```
