# Overview

- [Overview](#overview)
- [Introduction](#introduction)
- [Why are closures important in JavaScript?](#why-are-closures-important-in-javascript)
- [When to use closure in JavaScript?](#when-to-use-closure-in-javascript)
- [What is the benefit of closure in JavaScript?](#what-is-the-benefit-of-closure-in-javascript)
- [Lexical Scoping](#lexical-scoping)
    - [Child can access the variable declared in parent](#child-can-access-the-variable-declared-in-parent)
    - [Child can't access the variable declared in another child](#child-cant-access-the-variable-declared-in-another-child)
    - [Parent can't access the variable declared in child](#parent-cant-access-the-variable-declared-in-child)
  - [Overall](#overall)

&nbsp;

&nbsp;

&nbsp;

# Introduction

A closure is an inner function that has access to the outer function's variables and parameters. It allows the inner function to access and manipulate the outer function's variables, even after the outer function has returned.

&nbsp;

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

&nbsp;

In JavaScript, closures are created every time a function is created, at function creation time.

&nbsp;

&nbsp;

# Why are closures important in JavaScript?

Closures are important in JavaScript because they allow for information hiding and encapsulation. They also allow for private variables and methods, which can be useful in certain scenarios.

&nbsp;

&nbsp;

# When to use closure in JavaScript?

Closure in JavaScript can be used when you want to create functions that have access to variables from an outer function, even after the outer function has returned. This can be useful for maintaining state or for creating private variables in an object.

&nbsp;

&nbsp;

# What is the benefit of closure in JavaScript?

The benefit of closure in JavaScript is that it allows you to create functions with persistent state and private variables. This can help you write more efficient and readable code, and can also provide additional security by protecting data from being modified from outside the closure.

&nbsp;

&nbsp;
&nbsp;

# Lexical Scoping

### Child can access the variable declared in parent

```js
function outer() {
  let username = "Chaitaly";

  function inner1() {
    console.log("Inside Inner1", username);
  }

  inner1();
  console.log("inside outer", username);
}
outer();

// Inside Inner1 Chaitaly
// inside outer Chaitaly
```

&nbsp;

### Child can't access the variable declared in another child

```js
function outer() {
  let username = "Chaitaly";

  function inner1() {
    let lastname = "Kundu";
    console.log("Inside Inner1", username);
    console.log("Inside Inner1", lastname);
  }

  function inner2() {
    console.log("Inside Inner2", username);
    console.log("Inside Inner2", lastname); // This line will give error (ReferenceError: lastname is not defined)
  }

  inner1();
  inner2();

  console.log("inside outer", username);
}
outer();
```

&nbsp;

### Parent can't access the variable declared in child

```js
function outer() {
  function inner1() {
    let lastname = "Kundu";

    console.log("Inside Inner1", lastname);
  }

  inner1();
  console.log("Inside outer", lastname); // This line will give error (ReferenceError: lastname is not defined)
}
outer();
```

&nbsp;

&nbsp;

## Overall

```js
function outer() {
  let username = "Chaitaly";

  function inner1() {
    let lastname = "Kundu";
    console.log("Inside Inner1", username);
    console.log("Inside Inner1", lastname);
  }

  function inner2() {
    console.log("Inside Inner2", username);
    console.log("Inside Inner2", lastname);
  }

  inner1();
  inner2();

  console.log("inside outer", username);
  console.log("Inside outer", lastname);
}
outer();
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
