if boolean is used, true is 1, false is 0

# 1. Numaric value with boolean

```js
let result;

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4
```

# 2. Numeric string with boolean (except `+` operator)

Numeric string used with `- , / , \*` results `number` type

```js
let result;

result = "4" - true;
console.log(result); // 3
```

&nbsp;

## Note

JavaScript considers `0 as false` and `all non-zero number as true`. And, if true is converted to a number, the result is always 1
