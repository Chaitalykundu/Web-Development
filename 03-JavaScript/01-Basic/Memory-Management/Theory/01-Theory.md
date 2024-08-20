# Overview

- Introduction
- Memory Life Cycle
- Store data
- Example

&nbsp;

&nbsp;

&nbsp;

# Introduction

Memory management in JavaScript is handled automatically by the runtime environment, typically the JavaScript engine in web browsers or Node.js. JavaScript uses a garbage collector to manage memory and ensure that developers do not need to manually allocate or deallocate memory.

&nbsp;

&nbsp;

# Memory Life Cycle

Irrespective of the programming language, the memory life cycle follows the following stages:

- **Allocates the memory we need**: JavaScript allocates memory to the object created.

- **Use the allocated memory**.

- **Release the memory when not in use**: Once the allocated memory is released, it is used for other purposes. It is handled by a JavaScript engine.

The second stage is the same for all the languages. However, the first and last stages are implicit in high-level languages like JavaScript.

&nbsp;

&nbsp;

# Store data

JavaScript engines have two places to store data

1. <u>**_Stack_**</u>: It is a data structure used to store **static data**. Static data refers to data whose size is known by the engine during compile time. In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined. References that point to objects and functions are also included. A fixed amount of memory is allocated for static data. This process is known as **static memory allocation**.

2. <u>**_Heap_**</u>: It is used to store **objects and functions** in JavaScript. The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.

&nbsp;

| Stack                                     | Heap                        |
| ----------------------------------------- | --------------------------- |
| Store Primitive data types and references | Store Objects and functions |
| Size is known at compile time             | Size is known at run time   |
| Fixed memory allocated                    | No limit for object memory  |
|                                           |                             |

&nbsp;

&nbsp;

# Example

```js
let fname = "Chaitaly";
console.log(fname);

let anotherName = fname;
console.log(anotherName);
```

Here, `fname`, `anotherName` will be stored in stack

&nbsp;

```js
let userOne = {
  name: "Chaitaly Kundu",
  gender: "F",
};

let userTwo = userOne;
console.log(userOne);
console.log(userTwo);

function getName() {
  return userOne.name;
}

console.log(getName());
```

Here, userOne, userTwo, getName will be stored in stack.
And `{ name: "Chaitaly Kundu", gender: "F",}`, `function getName() { return userOne.name;}` will be stored in heap.

&nbsp;

&nbsp;

# Garbage Collection

Garbage collectors are used in releasing memory.

Once the engine recognizes that a variable, object, or function is not needed anymore, it releases the memory it occupied. The main issue here is that it is very difficult to predict accurately whether a particular variable, object, or function is needed anymore or not. Some algorithms help to find the moment when they become obsolete with great precision.

&nbsp;

&nbsp;

&nbsp;
