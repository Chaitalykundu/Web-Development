# undefined used with number, boolean or null

Arithmetic operation of undefined with **number, boolean** or **null** gives `NaN`

```js
let result;

result = 4 + undefined;
console.log(result); // NaN

result = 4 - undefined;
console.log(result); // NaN

result = true + undefined;
console.log(result); // NaN

result = null + undefined;
console.log(result); // NaN
```

&nbsp;

&nbsp;

# undefined used with string

Arithmetic operation of undefined with _string_ gives `string`

```js
result = "abc" + undefined;
console.log(result); //abcundefined
```
