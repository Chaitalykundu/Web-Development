# Warning

Array elements can be deleted using the JavaScript operator `delete`.

Using `delete` leaves undefined holes in the array.

Use `pop()` or `shift()` instead.

&nbsp;

&nbsp;

# Example

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML = "The first fruit is: " + fruits[0]; The first fruit is: Banana


// after deleting
delete fruits[0];

document.getElementById("demo2").innerHTML = "The first fruit is: " + fruits[0]; The first fruit is: undefined
```
