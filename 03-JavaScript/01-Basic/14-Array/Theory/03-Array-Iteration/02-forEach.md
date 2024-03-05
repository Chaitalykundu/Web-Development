# JavaScript Array `forEach()`

```js
const arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
  console.log(element);
});
```

&nbsp;

&nbsp;

The `forEach()` method calls a function (a callback function) once for each array element.

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
