# Description

The `table()` method writes a table to the console.

&nbsp;

&nbsp;

# Note

You can sort the table by clicking the column names.

&nbsp;

&nbsp;

# Syntax

```js
console.table(tabledata, tablecolumns)
```

&nbsp;

&nbsp;

# Parameters

| Parameters | Description                          |
| ---------- | ------------------------------------ |
| tabledata	|Required.
||The data to fill the table with.
|tablecolumns	|Optional.
||An array with the names of the table columns. |
|            |                                      |

&nbsp;

&nbsp;

# Examples

Using an array of objects:

```js
const car1 = {name:"Audi", model:"A4"}
const car2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}

console.table([car1, car2, car3]);
```

&nbsp;

Only include the "model" column in the table:

```js
const car1 = {name:"Audi", model:"A4"}
const car2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}

console.table([car1, car2, car3], ["model"]);
```

&nbsp;

&nbsp;

# Browser Support

`console.table()` is supported in all modern browsers, not supported in Internet Explorer 11 (or earlier).
