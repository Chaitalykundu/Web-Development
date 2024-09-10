# Questions

# Introduction

## Theory

1. What is Programming
2. What is ECMAScript
3. What is JavaScript
4. What are the features of JS
5. What are the Application of JavaScript
6. What can we build using JavaScript

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Answer

&nbsp;
&nbsp;
&nbsp;

# Datatype

2. Is null an independent type or object

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
