# Use "use strict"

`"use strict"` treats all js code of newer version.

&nbsp;

&nbsp;

Avoid `global variables`, avoid `new`, avoid `==`, avoid `eval()`

&nbsp;

&nbsp;

# Avoid Global Variables

# Always Declare Local Variables instead of global

Local variables must be declared with the `var`, the `let`, or the `const` keyword, otherwise they will become global variables.

&nbsp;

&nbsp;

# Declarations on Top

It is a good coding practice to put all declarations at the top of each script or function.

&nbsp;

## Example

```js
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.9;
discount = 0.1;

fullPrice = price - discount;
```

&nbsp;

&nbsp;

# Initialize Variables

It is a good coding practice to initialize variables when you declare them.

&nbsp;

## Example

```js
// Declare and initiate at the beginning
let firstName = "";
let price = 0;
const myArray = [];
const myObject = {};
```

&nbsp;

&nbsp;

# Declare Objects with const

Declaring objects with const will prevent any accidental change of type:

&nbsp;

## Example

```js
let car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat"; // Changes object to string

const car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat"; // Not possible
```

&nbsp;

&nbsp;

# Declare Arrays with const

Declaring arrays with const will prevent any accidental change of type:

&nbsp;

## Example

```js
let cars = ["Saab", "Volvo", "BMW"];
cars = 3; // Changes array to number

const cars = ["Saab", "Volvo", "BMW"];
cars = 3; // Not possible
```

&nbsp;

&nbsp;

# on't Use new Object()

- Use "" instead of new String()
- Use 0 instead of new Number()
- Use false instead of new Boolean()
- Use {} instead of new Object()
- Use [] instead of new Array()
- Use /()/ instead of new RegExp()
- Use function (){} instead of new Function()

&nbsp;

&nbsp;

# Use === Comparison

The `==` comparison operator always converts (to matching types) before comparison.

The `===` operator forces comparison of values and type:

&nbsp;

## Example

```js
0 == ""; // true
1 == "1"; // true
1 == true; // true

0 === ""; // false
1 === "1"; // false
1 === true; // false
```

&nbsp;

&nbsp;

# Avoid Number, String, and Boolean as Objects

Always treat numbers, strings, or booleans as primitive values. Not as objects.

Declaring these types as objects, slows down execution speed, and produces nasty side effects:

&nbsp;

## Example

```js
let x = "John";
let y = new String("John");
x === y; // is false because x is a string and y is an object.
```

&nbsp;

&nbsp;

# Avoid Using eval()

The `eval()` function is used to run text as code. In almost all cases, it should not be necessary to use it.

Because it allows arbitrary code to be run, it also represents a security problem.
