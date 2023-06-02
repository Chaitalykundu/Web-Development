The JavaScript `for in` statement loops through the properties of an Object

We use for-in loop in object and array

&nbsp;

# Syntax :

```js
for (let key in object_name) {
  // code block to be executed
}
```

&nbsp;

# Example

```js
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
```

&nbsp;

## Example Explained

The for in loop iterates over a person object

Each iteration returns a key (x)

The key is used to access the value of the key

The value of the key is person[x]

&nbsp;
&nbsp;
&nbsp;
&nbsp;
