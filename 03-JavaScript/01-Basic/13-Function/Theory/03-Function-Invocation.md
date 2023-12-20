# Function Invocation

- **_Function invocation_** is a way to use the code inside a function

The code inside the function will execute when "something" **invokes** (calls) the function

- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

&nbsp;

&nbsp;

# Invoking a JavaScript Function

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".

&nbsp;

# Invoking a Function as a Function

```js
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2); // Will return 20
```

```js
function myFunction(a, b) {
  return a * b;
}
window.myFunction(10, 2); // Will also return 20
```

`myFunction()` and `window.myFunction()` is the same function

&nbsp;

&nbsp;

# Self-Invoking Functions

Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression:

# Example

```js
(function () {
  let x = "Hello!!"; // I will invoke myself
})();
```

The function above is actually an anonymous self-invoking function (function without name).

&nbsp;

&nbsp;

# The Global Object

When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

&nbsp;

This example returns the window object as the value of this:

```js
let x = myFunction(); // x will be the window object

function myFunction() {
  return this;
}
```

Invoking a function as a global function, causes the value of this to be the global object.
Using the window object as a variable can easily crash your program.

&nbsp;

&nbsp;

# Invoking a Function as a Method

In JavaScript you can define functions as object methods.

&nbsp;

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

```js
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
myObject.fullName(); // Will return "John Doe"
```

&nbsp;

he fullName method is a function. The function belongs to the object. myObject is the owner of the function.

The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.

Test it! Change the fullName method to return the value of this:

```js
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this;
  },
};

// This will return [object Object] (the owner object)
myObject.fullName();
```

&nbsp;

Invoking a function as an object method, causes the value of `this` to be the object itself.

&nbsp;

&nbsp;

# Invoking a Function with a Function Constructor

If a function invocation is preceded with the new keyword, it is a constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

Example

```js
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;
```

&nbsp;

&nbsp;
A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

&nbsp;

The `this` keyword in the constructor does not have a value.

The value of this will be the new object created when the function is invoked.
&nbsp;
&nbsp;
&nbsp;
&nbsp;
