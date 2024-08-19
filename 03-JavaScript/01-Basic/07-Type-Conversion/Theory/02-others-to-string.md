# Implicit Conversion to `String`

numeric string used with `+` gives string type

&nbsp;

# 1. Number to String

When a number is added to a string, JavaScript **converts the number to a string** before concatenation.

```js
let result;

result = "3" + 2;
console.log(result); // "32"
```

&nbsp;

add a empty string with number

```js
let n = 20;
console.log(n + "", typeof (n + "")); // 20 string
```

&nbsp;

&nbsp;

# 2. boolean to String

```js
result = "3" + true;
console.log(result); // "3true"
```

&nbsp;

&nbsp;

# 3. undefined to String

```js
result = "3" + undefined;
console.log(result); // "3undefined"
```

&nbsp;

&nbsp;

# 4. null to String

```js
result = "3" + null;
console.log(result); // "3null"
```

&nbsp;

&nbsp;

&nbsp;

# Explicit Conversion to `String`

To convert other data types to strings, you can use either `String()` or `toString()`.

&nbsp;

# 1. number to String

```js
let result;

// using String()
result = String(324);
console.log(result); // "324"

result = String(2 + 4);
console.log(result); // "6"

// using toString()
result = (324).toString();
console.log(result); // "324"
```

&nbsp;

## more methods that can be used to convert numbers to strings:

| Method          | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| toExponential() | Returns a string, with a number rounded and written using exponential notation.          |
| toFixed()       | Returns a string, with a number rounded and written with a specified number of decimals. |
| toPrecision()   | Returns a string, with a number written with a specified length                          |

&nbsp;

&nbsp;

# 2. boolean to String

```js
// using String()
result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = true.toString();
console.log(result); // "true"
```

&nbsp;

&nbsp;

# 3. null to String

`String()` takes null and undefined and converts them to string. However, `toString()` gives error when null an undefined are passed.

&nbsp;

```js
// using String()
result = String(null);
console.log(result); // "null"

// using toString()
result = null.toString();
console.log(result); // error
```

&nbsp;

&nbsp;

# 4. undefined to String

`String()` takes null and undefined and converts them to string. However, `toString()` gives error when null an undefined are passed.

&nbsp;

```js
// using String()
result = String(undefined);
console.log(result); // "undefined"

// using toString()
result = String(undefined);
console.log(result); // error
```

&nbsp;

&nbsp;

# 5. NaN to String

```js
// using String()
result = String(NaN);
console.log(result); // "NaN"
```

&nbsp;

&nbsp;

# 6. Converting Dates to Strings

The global method `String()` & `toString()` can convert dates to strings.

```js
String(Date()); // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
Date().toString(); // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
```

## more methods that can be used to convert dates to strings:

| Method            | Description                                       |
| ----------------- | ------------------------------------------------- |
| getDate()         | Get the day as a number (1-31)                    |
| getDay()          | Get the weekday a number (0-6)                    |
| getFullYear()     | Get the four digit year (yyyy)                    |
| getHours()        | Get the hour (0-23)                               |
| getMilliseconds() | Get the milliseconds (0-999)                      |
| getMinutes()      | Get the minutes (0-59)                            |
| getMonth()        | Get the month (0-11)                              |
| getSeconds()      | Get the seconds (0-59)                            |
| getTime()         | Get the time (milliseconds since January 1, 1970) |
|                   |
