# for statement

A for loop repeats until a specified condition evaluates to false.

The JavaScript `for loop` is similar to the Java and C for loop.

&nbsp;

# Flow Chart

<img src="../assets/for_loop.jpg">

&nbsp;

&nbsp;

# Syntax

```js
for (initialization; condition; increment) {
  code to be executed;
}
```

&nbsp;

# Example

```js
for (let i = 0; i < selectObject.options.length; i++) {
  if (selectObject.options[i].selected) {
    numberSelected++;
  }
}
```

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
