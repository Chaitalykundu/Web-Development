# Overview

- Syntax
- Selector
- Declaration Block

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- Selector is the element of HTML which will be styled.

- Declaration block consists of one or more Property and value

- Property is a type of attribute of HTML

&nbsp;

&nbsp;

# Syntax

- A CSS rule set contains a **selector** and a **declaration block** .

```css
Selector {
  property1: value1;
  property2: value2;
  ..........;
}
```

&nbsp;

## Selector

Selector indicates the HTML element you want to style.

It could be any tag like `<h1>`, `<p>`, or any class or id etc.

&nbsp;

## Declaration Block

- The declaration block can contain one or more declarations separated by a semicolon.

- Each declaration contains a **property** name and **value**, separated by a colon.

&nbsp;

### Property

- A Property is a type of attribute of HTML element. It could be color, border etc.

### Value

- Values are assigned to CSS properties.

&nbsp;

## Example

```css
p {
  color: yellow;
  font-size: 11 px;
}
```

- here p is selector,

- These two are declaration block.
  - color: yellow;
  - font-size: 11 px;
- color, font-size are properties
- yellow, 11px are values
