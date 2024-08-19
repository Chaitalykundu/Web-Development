# Overview

- Definition
- Types of Type Casting
- Implicit Conversion
- Explicit Conversion
  
&nbsp;

&nbsp;

&nbsp;

# Definition

**Type conversion** (or typecasting) is a method or process that converts a datatype into another datatype in both ways manually and automatically.

**Implicit conversion** happens when the **compiler** (for compiled languages) or **runtime** (for script languages like JavaScript) automatically converts datatypes. The source code can also explicitly require a conversion to take place.

&nbsp;

&nbsp;

# Types of Type Conversion / Casting

JavaScript variables can be converted to a new variable and another datatype in two ways:

- **Implicit Conversion** : automatic type conversion
- **Explicit Conversion** : using function

&nbsp;

&nbsp;

# Implicit Conversion

There are various operator and functions in JavaScript which automatically converts a value to the right type

## Example

```js
let result;

// If we concat (`+`) string and numeric then it will conb=vert the number to string

result = "3" + 2;
console.log(result); // "32"

result = "4" - "2";
console.log(result); // 2

result = "hello" - "world";
console.log(result); // NaN

result = "3" + null;
console.log(result); // "3null"
```

&nbsp;

> Note: When a number is added to a string, JavaScript converts the number to a string before concatenation.

&nbsp;

&nbsp;

# Explicit Conversion

The type conversion that you do manually is known as explicit type conversion.

In JavaScript, explicit type conversions are done using **built-in** functions.

&nbsp;

&nbsp;

&nbsp;

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

&nbsp;

# Converting Dates to Strings

The global method `String()` can convert dates to strings.

```js
String(Date()); // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
```

The Date method `toString()` does the same.

```js
Date().toString(); // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
```

&nbsp;

&nbsp;

# Converting Booleans to Numbers

The global method `Number()` can also convert booleans to numbers.

```js
Number(false); // returns 0
Number(true); // returns 1
```

&nbsp;

&nbsp;

# Converting Booleans to Strings

The global method `String()` can convert booleans to strings.

```js
String(false); // returns "false"
String(true); // returns "true"
```

The Boolean method `toString()` does the same.

```js
false.toString(); // returns "false"
true.toString(); // returns "true"
```

&nbsp;

&nbsp;

# Automatic Type Conversion

When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

The result is not always what you expect:

```js
5 + null; // returns 5         because null is converted to 0
"5" + null; // returns "5null"   because null is converted to "null"
"5" + 2; // returns "52"      because 2 is converted to "2"
"5" - 2; // returns 3         because "5" is converted to 5
"5" * "2"; // returns 10        because "5" and "2" are converted to 5 and 2
```

&nbsp;

&nbsp;

# Automatic String Conversion

JavaScript automatically calls the variable's `toString()` function when you try to "output" an object or a variable:

```js
document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"} // toString converts to "[object Object]"
// if myVar = [1,2,3,4] // toString converts to "1,2,3,4"
// if myVar = new Date() // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
```

Numbers and booleans are also converted, but this is not very visible:

```js
// if myVar = 123 // toString converts to "123"
// if myVar = true // toString converts to "true"
// if myVar = false // toString converts to "false"
```

&nbsp;

&nbsp;

# JavaScript Type Conversion Table

This table shows the result of converting different JavaScript values to Number, String, and Boolean:

| Original Value   | Converted to Number | Converted to String | Converted to Boolean |
| ---------------- | ------------------- | ------------------- | -------------------- |
| false            | 0                   | "false"             | false                |
| true             | 1                   | "true"              | true                 |
| 0                | 0                   | "0"                 | false                |
| 1                | 1                   | "1"                 | true                 |
| "0"              | 0                   | "0"                 | `true`               |
| "000"            | 0                   | "000"               | `true`               |
| "1"              | 1                   | "1"                 | true                 |
| NaN              | NaN                 | "NaN"               | false                |
| Infinity         | Infinity            | "Infinity"          | true                 |
| -Infinity        | -Infinity           | "-Infinity"         | true                 |
| ""               | `0`                 | ""                  | `false`              |
| "20"             | 20                  | "20"                | true                 |
| "twenty"         | NaN                 | "twenty"            | true                 |
| [ ]              | `0`                 | ""                  | true                 |
| [20]             | `20`                | "20"                | true                 |
| [10,20]          | NaN                 | "10,20"             | true                 |
| ["twenty"]       | NaN                 | "twenty"            | true                 |
| ["ten","twenty"] | NaN                 | "ten,twenty"        | true                 |
| function(){}     | NaN                 | "function(){}"      | true                 |
| { }              | NaN                 | "[object Object]"   | true                 |
| null             | `0`                 | "null"              | false                |
| undefined        | NaN                 | "undefined"         | false                |

Values in quotes indicate string values.

Red values indicate values (some) programmers might not expect.
