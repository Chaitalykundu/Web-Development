# Overview

- [Overview](#overview)
- [Description](#description)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Example](#example)
- [Return Value](#return-value)
- [Browser Support](#browser-support)

&nbsp;

&nbsp;

&nbsp;

# Description

The `matchAll()` method returns an iterator containing the results of matching a string against a string (or a regular expression).

&nbsp;

&nbsp;

# Syntax

```js
string.matchAll(matchValue);
```

&nbsp;

&nbsp;

# Parameters

| Parameter  | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| matchValue | Required.                                                                          |
|            | The search value.                                                                  |
|            | A regular expression (or a string that will be converted to a regular expression). |

&nbsp;

&nbsp;

# Example

```js
const iterator = text.matchAll("Cats"); //Cats,Cats
```

&nbsp;

If the parameter is a **regular expression**, the global flag (g) must be set, otherwise a TypeError is thrown.

```js
const iterator = text.matchAll(/Cats/g); //Cats,Cats
```

&nbsp;

If you want to search case insensitive, the insensitive flag (i) must be set:

```js
const iterator = text.matchAll(/Cats/gi);
```

&nbsp;

&nbsp;

# Return Value

| Type     | Description                      |
| -------- | -------------------------------- |
| An array | An array containing the matches. |
| or null  | null if no match is found.       |

&nbsp;

&nbsp;

# Browser Support

`matchAll()` is an `ES2020` feature.

`matchAll()` does not work in Internet Explorer.
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
