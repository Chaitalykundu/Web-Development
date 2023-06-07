# Iterating

Iterating simply means looping over a sequence of elements.

Here are some easy examples:

- Iterating over a String
- Iterating over an Array

Technically, iterables must implement the `Symbol.iterator` method.

&nbsp;

&nbsp;

# The For Of Loop

The JavaScript `for..of` statement loops through the elements of an iterable object.

&nbsp;

## Syntax

```js
for (variable of iterable) {
  // code block to be executed
}
```

&nbsp;

&nbsp;

# Iterating Over a String

You can use a `for..of` loop to iterate over the elements of a string:

&nbsp;

## Example

```js
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}
```

&nbsp;

&nbsp;

# Iterating Over an Array

You can use a for..of loop to iterate over the elements of an Array:

&nbsp;

## Example

```js
const letters = ["a", "b", "c"];

for (const x of letters) {
  // code block to be executed
}
```

&nbsp;

&nbsp;

# Iterating Over a Set

You can use a `for..of` loop to iterate over the elements of a Set:

&nbsp;

## Example

```js
const letters = new Set(["a", "b", "c"]);

for (const x of letters) {
  // code block to be executed
}
```

&nbsp;

&nbsp;

# Iterating Over a Map

You can use a `for..of` loop to iterate over the elements of a Map

&nbsp;

## Example

```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (const x of fruits) {
  // code block to be executed
}
```

&nbsp;

&nbsp;

&nbsp;

# JavaScript Iterators

The `iterator protocol` defines how to produce a **_sequence of values_** from an object.

An object becomes an iterator when it implements a `next()` method.

The `next()` method must return an object with two properties:

- value (the next value)
- done (true or false)

|       |
| ----- | -------------------------------------------------------------------------------------- |
| value | The value returned by the iterator (Can be omitted if done is true)                    |
| done  | `true` if the iterator has completed. `false` if the iterator has produced a new value |

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
