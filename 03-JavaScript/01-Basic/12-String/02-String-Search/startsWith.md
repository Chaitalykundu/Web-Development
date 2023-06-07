# Description

The `startsWith()` method returns true if a string starts with a specified string.

Otherwise it returns false.

The `startsWith()` method is case sensitive.

&nbsp;

&nbsp;

# Syntax

```js
string.startsWith(searchValue, start);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                 |
| ----------- | --------------------------- |
| searchvalue | Required.                   |
|             | The string to search for.   |
| start       | Optional.                   |
|             | The position to start from. |
|             | Default value is 0.         |
|             |

&nbsp;

&nbsp;

# Example

```js
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello"); //true
```

```js
let text = "Hello world, welcome to the universe.";
text.startsWith("world"); //false
```

&nbsp;

A start position for the search can be specified:

```js
let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5); //false
```

```js
let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6); //true
```

&nbsp;

&nbsp;

# Return Value

| Type      | Description                                       |
| --------- | ------------------------------------------------- |
| A boolean | Returns true if the string starts with the value. |
|           | Otherwise it returns false.                       |

&nbsp;

&nbsp;

# Browser Support

`startsWith()` is an `ECMAScript6 (ES6)` feature.

`ES6 (JavaScript 2015)` is supported in all modern browsers

`startsWith()` is not supported in Internet Explorer 11 (or earlier).
