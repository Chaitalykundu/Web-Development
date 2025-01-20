# Non-Primitive / Object / Reference datatypes

The Object Datatypes are :

1. An object
2. An array
3. A Function

&nbsp;

| Type     | typeof return value                  |
| -------- | ------------------------------------ |
| object   | "object"                             |
| array    | "object"                             |
| function | "function" ( this is objectfunction) |
|          |                                      |

&nbsp;

&nbsp;

# Object

Represents a collection of key-value pairs.

```js
const car = { type: "Fiat", model: "500", color: "white" };
```

&nbsp;

&nbsp;

# Array

A special type of object used to store ordered lists of values.

```js
const cars = ["Saab", "Volvo", "BMW"];
```

&nbsp;

&nbsp;

# Function

A block of code designed to perform a task.

```js
function findname() {}
```

&nbsp;

&nbsp;

# Dates

Represents dates and times.

```js
const d = new Date("2022-03-25");
```

&nbsp;

&nbsp;

# Map

A collection of key-value pairs where keys can be of any type.

```js
let map = new Map();
map.set("key", "value");
console.log(map);
```

&nbsp;

&nbsp;

# Set

A collection of unique values.

```js
let set = new Set([1, 2, 3, 3]);
console.log(set);
```

&nbsp;

&nbsp;

# WeakMap and WeakSet

Similar to `Map` and `Set` but with weakly held references for keys/values
