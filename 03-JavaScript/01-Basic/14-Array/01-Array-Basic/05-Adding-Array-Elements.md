# Using `push()` method

The easiest way to add a new element to an array is using the `push()` method:

&nbsp;

## Example

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
```

&nbsp;

&nbsp;

# Using `length` property

New element can also be added to an array using the `length` property:

&nbsp;

## Example

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon"; // Adds "Lemon" to fruits
```

&nbsp;

&nbsp;

# WARNING !

Adding elements with high indexes can create undefined "holes" in an array:

&nbsp;

## Example

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon"; // Creates undefined "holes" in fruits

/*
Banana
Orange
Apple
undefined
undefined
undefined
Lemon
*/
```

&nbsp;

&nbsp;
