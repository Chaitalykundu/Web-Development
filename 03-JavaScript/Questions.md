# Questions

# Introduction

## Theory

1. What is Programming
2. What does ES stand for
3. What is ECMAScript
4. Why does ECMAScript Matter
5. How is it related to JavaScript
6. What is JavaScript
7. What are the features of JS
8. What are the Application of JavaScript
9. What can we build using JavaScript
10. What is High-level language
11. What is Interpreted language
12. What is Dynamic Language


- How is JavaScript different from Java?
- What are the key features of JavaScript?
- Why is JavaScript called a client-side scripting language?
- What is the difference between JavaScript and ECMAScript?
- Is JavaScript a compiled or an interpreted language? Explain.
- What are the different JavaScript engines?

&nbsp;

&nbsp;

## JS Versions

1. When and by whom was javascript invented
2. What are the different names of javascript
3. Which is the latest version of ECMAscript
4. What can we use in code to treat all js code as newer version.

&nbsp;

&nbsp;

## How to add

&nbsp;

&nbsp;

## Output

&nbsp;

&nbsp;

## Statements

&nbsp;

&nbsp;

## Keywords

1. What is keyword
2. Can we use keyword as variable name

&nbsp;

&nbsp;

## Syntax

1. How many types of values are there in JS? What are they called
2. What are the syntax rules for Literals
3. What is Variable
4. Which keywords are used to declare variables
5. What is Expression
6. What is Evaluation
7. What is Identifiers
8. What are the rules for Identifiers

&nbsp;

&nbsp;

## Comments

1. Why do we use comments
2. Which is the symbol of Single-line Comments
3. Which is the symbol of Multi-line Comments

&nbsp;

&nbsp;

# Variable

1. What is Variable
2. Which is the basic unit of storage in a program
3. What is JS Identifiers
4. What are the Naming rules of Identifiers
5. In how many ways we can Declare a JavaScript Variable
6. How to Declare a variable
7. Is it possible to Declare & Initialize a variable together
8. Can we declare Many Variables is one statement

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Datatype

1. What is the difference between null and undefine
2. Is null a independent type or object

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Closure

1. What is a closure in JavaScript?
2. Why are closures important in JavaScript?
3. Can you give an example of a closure in JavaScript?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

- What is the difference between var, let, and const in JavaScript?

- Explain arrow functions (()=>{}) and how they differ from regular functions.

- What is template literals, and how are they used in ES6?

- What are default parameters, and why are they useful?

- Explain destructuring assignment in ES6 with an example.

- What is the difference between spread (...) and rest (...) operators?

- What is strict mode in JavaScript, and why is it used?

- How does block scoping work in JavaScript?

- 🔹 Intermediate Level

- What is ECMAScript Modules (ESM), and how do import and export work?

- What are Promises in JavaScript, and how do they help in asynchronous programming?

- Explain async/await and how it improves handling asynchronous code.

- What is optional chaining (?.), and how does it work?

- What is Nullish Coalescing (??), and how is it different from ||?

- How does Set and Map work in ES6?

- What is the difference between forEach(), map(), filter(), and reduce()?

- Explain WeakMap and WeakSet and when to use them.

- What are Symbol and BigInt in JavaScript?

- What is the difference between a shallow copy and a deep copy in JavaScript?

- 🔹 Advanced Level

- How do JavaScript engines (V8, SpiderMonkey, etc.) implement ECMAScript?

- What is tail call optimization, and how does it work in JavaScript?

- How do private class fields work in JavaScript?

- What are dynamic imports, and how do they improve performance?

- Explain the concept of iterators and generators in JavaScript.

- How does Reflect API work in JavaScript?

- What are Proxy objects, and how can they be used?

- How does debouncing and throttling work in JavaScript?

- What is WeakRef, and when should it be used?

- How does ESLint help enforce ECMAScript standards in projects?

- 🔥 Bonus Questions (Conceptual & Practical)

- What is hoisting, and how does it work with var, let, and const?

- What are getter and setter methods, and how are they defined in ES6?

- Explain event loop, microtasks, and macrotasks in JavaScript.

- What is currying, and how can it be implemented?

- What is the difference between deep destructuring and shallow destructuring?

- &nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Answer

# Introduction

## 1. What is Programming

Programming is the way of talking to computer

&nbsp;

## 2. What does ES stand for

ES stands for EcmaScript

&nbsp;

## 3. What is ECMAScript

Ecmascript defines the specification of scripting language.
Ecmascript is the specification or standard that tells how scripting language should be.

&nbsp;
&nbsp;

## 5. How is it related to JavaScript

- JavaScript is an implementation of ECMAScript.

- ECMAScript provides the core features (such as data types, objects, functions, and control structures), while JavaScript adds browser-specific functionalities like DOM manipulation, events, and APIs.

- Think of ECMAScript as the blueprint, and JavaScript as a practical implementation based on that blueprint.

&nbsp;

&nbsp;

&nbsp;

# Datatype

## 2. Is null an independent type or object

```md
null is an object type
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

# Variable

### 8. Can we declare Many Variables is one statement

```md
Yes. By using comma.
```

&nbsp;

&nbsp;

# Closure

### 1. What is a closure in JavaScript?

```md
A closure is an inner function that has access to the outer function's variables and parameters.

It allows the inner function to access and manipulate the outer function's variables, even after the outer function has returned.
```

&nbsp;

### 2. Why are closures important in JavaScript?

```md
Closures are important in JavaScript because they allow for information hiding and encapsulation. They also allow for private variables and methods, which can be useful in certain scenarios.
```

&nbsp;

### 3. Can you give an example of a closure in JavaScript?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
&nbsp;
&nbsp;

# 1. What are the Difference Between String `indexOf()` and String `search()`

```md
The `indexOf()` method cannot search against a regular expression.

The `search()` cannot take a start position argument.
```

&nbsp;

&nbsp;

# 2.Why do we use functions?

```md
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.
```

&nbsp;

&nbsp;

# 3. What are the ways to empty an array?

1. Assigning to it in a new empty array :

   ```js
   let a = [1, 2, 3];
   console.log(b); // [1,2,3]

   let b = [];
   b = a;
   console.log(b); // []
   ```

   when the value `a` is assigned to an empty array `b`, the array `a` will also be empty. This is the fastest way to empty an aray.

2. Using splice :

   ```js
   a.splice(0, a.length());
   ```

   The `splice()` method removed all the elements of the array and returned the removed element as an array

3. Setting the length to zero :

   ```js
   a.length = 0;
   ```

4. Using pop() method :

   ```js
   while (a.length > 0) {
     a.pop();
   }
   ```

   This is relatively straightforward, but may not be the most performant solution among the other methods.

&nbsp;

&nbsp;

# 4. What is the difference between console.log, alert() and document.write()

`console.log` is mainly used to debug the code.

Syntax : `console.log("Hello world")`

&nbsp;

`alert()` method displays an alert box over the current window with specified message.

Syntax : `alert("Hello World")`

&nbsp;

`document.write()` is used when you want to print the content to the HTML document.

Syntax : `document.write("Hello world)`

&nbsp;

&nbsp;

# 5. What is Node?

Node is a CPP programming language where we can add js functionalities.

&nbsp;

&nbsp;

# 6. Is JS a Client-Side or Server-Side Language?

Client-side

&nbsp;

&nbsp;

# 7. Why do we avoid to use var?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
