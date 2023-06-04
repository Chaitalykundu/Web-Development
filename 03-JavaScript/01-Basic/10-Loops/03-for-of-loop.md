The JavaScript for of statement loops through the values of an iterable object.

&nbsp;

# Syntax :

```js
for (variable of iterable) {
  // code block to be executed
}
```

- variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

- iterable - An object that has iterable properties.

&nbsp;

# Example : Looping over a Array

```js
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```

&nbsp;

# Example : Looping over a String

```js
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x;
}
```
