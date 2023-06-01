# JavaScript Type Operators

| Operator   | Description                                                |
| ---------- | ---------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |

&nbsp;

&nbsp;

# The `typeof` operator

The `typeof` operator returns **a string** indicating the data type of a JavaScript variable.

The parentheses are optional.

&nbsp;

&nbsp;

# Example :

```js
const myFun = new Function("5 + 2");
typeof myFun; // returns "function"

const shape = "round";
typeof shape; // returns "string"
```

&nbsp;

In JavaScript there are 5 different data types that can contain values:

- string
- number
- boolean
- object
- function

There are 6 types of objects:

- Object
- Date
- Array
- String
- Number
- Boolean

And 2 data types that cannot contain values:

- null
- undefined

&nbsp;

&nbsp;

&nbsp;

# The `instanceof` Operator

The `instanceof` operator returns **true** if an object is an instance of the specified object:

&nbsp;

## Example

```js
const cars = ["Saab", "Volvo", "BMW"];

cars instanceof Array;
cars instanceof Object;
cars instanceof String;
cars instanceof Number;
```
