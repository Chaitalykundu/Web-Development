# 1. Numeric String to number

Numeric string used with `- , / , \*` results `number` type

```js
let result;

result = "4" - "2";
console.log(result); // 2

result = "4" - 2;
console.log(result); // 2

result = "4" * 2;
console.log(result); // 8

result = "4" / 2;
console.log(result); // 2
```


&nbsp;

&nbsp;

# 2. Non-numeric String with numeric string

non-numeric string used with `- , / , \*` results to `NaN`

```js
let result;

result = "hello" - "world";
console.log(result); // NaN

result = "4" - "hello";
console.log(result); // NaN

result = "hello" * "4";
console.log(result); // NaN
```

&nbsp;

&nbsp;

# 3. Non-numeric string with numaric value

```js
result = 2 - "hello";
console.log(result); // NaN

result = "hello" * 4;
console.log(result); // NaN
```