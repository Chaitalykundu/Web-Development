# Looping Array Elements

One way to loop through an array, is using a `for loop`:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
for (let i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

/*
. Banana
. Orange
. Apple
. Mango
*/
```

&nbsp;

&nbsp;

You can also use the `Array.forEach()` function:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```

&nbsp;
&nbsp;
&nbsp;
