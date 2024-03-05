# Template Literal

## Synonyms

- Template Literals
- Template Strings
- String Templates
- Back-Tics Syntax

&nbsp;

&nbsp;

Template Literals use ` back-ticks (``) ` rather than the quotes ("") to define a string

## Example

```js
let name = `Chaitaly`;
let sentence = `You are a student`;
```

&nbsp;

&nbsp;

# Quotes Inside Strings

With template literals, you can use both single and double quotes inside a string:

&nbsp;

## Example

```js
let text = `He's often called "Johnny"`;
```

&nbsp;

&nbsp;

# Multiline Strings

Template literals allows multiline strings:

## Example

```js
let text = `The quick
brown fox
jumps over
the lazy dog`;
```

&nbsp;

&nbsp;

# Interpolation

Template literals provide an easy way to interpolate variables and expressions into strings. The method is called **string interpolation**.

&nbsp;

&nbsp;

## Syntax

```js
${...}
```

&nbsp;

&nbsp;

## Example :

```js
let a = `This is ${name}`;
```

&nbsp;

&nbsp;

# Variable Substitutions

Template literals allow variables in strings:

&nbsp;

## Example

```js
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
```

&nbsp;

&nbsp;

# Expression Substitution

Template literals allow expressions in strings:

&nbsp;

## Example

```js
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

&nbsp;

We can insert variable directly inside the Template Literal. This is called **string interpolation**

Means Automatic replacing of expressions with real values is called **string interpolation**.

&nbsp;

&nbsp;

# HTML Templates

## Example

```js
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
```

&nbsp;

&nbsp;

# Browser Support

`Template Literals` is an `ES6` feature (JavaScript 2015).

It is supported in all modern browsers:

`Template Literals` is not supported in Internet Explorer.
