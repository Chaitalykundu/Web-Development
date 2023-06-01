There are `2` Ways to Convert Values to Boolean in JavaScript

&nbsp;

### using `Boolean()`

```js
Boolean(value);
```

&nbsp;

### Using `!!`

```js
!!value;
```

Looks like the `!!` is a bit faster than `Boolean()`

&nbsp;

# How the `!!` works

The first `!` coerce the value to a boolean and inverse it. In this case, `!value` will return `false`. So to reverse it back to true, we put another ! on it. Hence the double use `!!`.

```js
const value = "string";

!value; // false

!!value; // true
```

&nbsp;

&nbsp;

# Convert to boolean

# 1. String to boolean

```js
let result = "string";

!!result; // true

Boolean(result); // true
```

&nbsp;

&nbsp;

# 2. Empty string to boolean

```js
let result = "";

!!result; // false
Boolean(result); // false
```

&nbsp;

&nbsp;

# 3. Number to boolean

```js
let result = 100;

!!result; // true
Boolean(result); // true
```

# 4. 0 to boolean

```js
let result = 0;

!!result; // false
Boolean(result); // false
```

&nbsp;

&nbsp;

# Falsy Values

In JavaScript, there are 6 falsy values. If you convert any of these to a boolean, it will return false.

```
false
undefined
null
NaN
0
"" (empty string)
```

&nbsp;

Applying `!!` on falsy values

```js
!!false; // false
!!undefined; // false
!!null; // false
!!NaN; // false
!!0; // false
!!""; // false
```

&nbsp;

Applying `Boolean()` on falsy values

```js
Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(0); // false
Boolean(""); // false
```

&nbsp;

&nbsp;
