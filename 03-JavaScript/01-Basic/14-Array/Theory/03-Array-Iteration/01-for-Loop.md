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
