# Overview

- [Overview](#overview)
- [Code snippet](#code-snippet)
- [Answer](#answer)
- [Reason](#reason)
  - [undefined](#undefined)
  - [ReferenceError: Cannot access 'b' before initialization](#referenceerror-cannot-access-b-before-initialization)
- [Fix the code](#fix-the-code)
- [Final Answer](#final-answer)

&nbsp;

&nbsp;

&nbsp;

# Code snippet

```js
console.log(a); // ?
var a = 5;

function testScope() {
  console.log(b); // ?
  let b = 10;
}

testScope();
```

&nbsp;

&nbsp;

# Answer

undefined

ReferenceError: Cannot access 'b' before initialization

&nbsp;

&nbsp;

# Reason

## undefined

- `var a` is hoisted to the top, but it is initialized as undefined until assignment.

&nbsp;

## ReferenceError: Cannot access 'b' before initialization

- let b is hoisted but remains uninitialized (it stays in the "Temporal Dead Zone").
- Accessing b before its declaration causes a ReferenceError

&nbsp;

&nbsp;

# Fix the code

```js
console.log(a);
var a = 5;

function testScope() {
  let b = 10;
  console.log(b);
}

testScope();
```

&nbsp;

&nbsp;

# Final Answer

undefined

10
