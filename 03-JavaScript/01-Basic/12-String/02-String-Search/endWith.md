# Description

The `endsWith()` method returns true if a string ends with a specified string.

Otherwise it returns false.

The `endsWith()` method is case sensitive.

&nbsp;

&nbsp;

# Syntax

```js
string.endsWith(searchvalue, length);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                                |
| ----------- | ------------------------------------------ |
| searchvalue | Required.                                  |
|             | The string to search for.                  |
| length      | Optional.                                  |
|             | The length of the string to search.        |
|             | Default value is the length of the string. |
|             |

&nbsp;

&nbsp;

# Example

```js
let text = "John Doe";
text.endsWith("Doe"); //true
```

&nbsp;

Check if the 11 first characters of a string ends with "world":

```js
let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11); //true
```

&nbsp;

&nbsp;

# Return Value

| Type      | Description                                              |
| --------- | -------------------------------------------------------- |
| A boolean | true if the string ends with the value, otherwise false. |

&nbsp;

&nbsp;

# Browser Support

`endsWith()` is an `ECMAScript6 (ES6)` feature.

`ES6 (JavaScript 2015)` is supported in all modern browsers

`endsWith()` is not supported in Internet Explorer 11 (or earlier).
