# Description

The `search()` method searches a string for a string (or a regular expression) and returns the position of the match

The `search()` method matches a string against a regular expression \*\*

The `search()` method returns the index (position) of the first match.

The `search()` method returns -1 if no match is found.

The `search()` method is case sensitive.

&nbsp;

## Note

If the search value is a string, it is converted to a regular expression.

&nbsp;

&nbsp;

# Syntax

```js
string.search(searchValue);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| searchvalue | Required.                                                                          |
|             | The search value.                                                                  |
|             | A regular expression (or a string that will be converted to a regular expression). |
|             |

&nbsp;

&nbsp;

# Example

```js
let text = "Please locate where 'locate' occurs!";
text.search("locate"); //7
```

&nbsp;

Using regular expression

```js
let text = "Please locate where 'locate' occurs!";
text.search(/locate/); //7
```

&nbsp;

Search case insensitive:

```js
let text = "Mr. Blue has a blue house";
let position = text.search(/blue/i); //4
```

&nbsp;

&nbsp;

# Return Value

| Type     | Description                     |
| -------- | ------------------------------- |
| A number | The position of the first match |
|          | -1 if no match.                 |

&nbsp;

&nbsp;

# Browser Support

`search()` is an `ECMAScript1 (ES1)` feature.

`ES1 (JavaScript 1997)` is fully supported in all browsers

&nbsp;

&nbsp;

# The Difference Between String `indexOf()` and String `search()`

The `indexOf()` method cannot search against a regular expression.

The `search()` cannot take a start position argument.

&nbsp;

&nbsp;

# The Difference Between

## String search() and String indexOf()

The `search()` cannot take a start position argument.

The `indexOf()` method cannot search against a regular expression.

&nbsp;

&nbsp;

## String search() and String match()

The `search()` method returns the position of the first match.

The `match()` method returns an array of matches.
