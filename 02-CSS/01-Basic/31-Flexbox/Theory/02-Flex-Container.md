# Overview

- [Overview](#overview)
- [Introduction](#introduction)
- [Create a flexbox](#create-a-flexbox)
- [The CSS properties used for the flex container](#the-css-properties-used-for-the-flex-container)

&nbsp;

&nbsp;

&nbsp;

# Introduction

An area of a document that is laid out using flexbox is called a **flex container**.

&nbsp;

&nbsp;

# Create a flexbox

To create a flex container, set the area's `display` property to `flex`.

```html
<div class="container">
  <div class="items">Item1</div>
  <div class="items">Item2</div>
  <div class="items">Item3</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #32a852;
}
```

Here the `div` containing the class `container` is flex-container and the div's containing class `items` are `flex-items`

&nbsp;

When we create a flex container, the direct children of that container become **flex items**.

You can explicitly control whether the container itself is displayed inline or in block formatting context using inline flex or inline-flex for inline flex containers or block flex or flex for block level flex containers.

&nbsp;

&nbsp;

# The CSS properties used for the flex container

The CSS properties we use for the flex container are:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

&nbsp;

&nbsp;

# `flex-direction` Property

The `flex-direction` property specifies the **display-direction** of flex items in the flex container.

&nbsp;

## Values of `flex-direction`

The `flex-direction` property can have one of the following values:

| Values              | flex items direction |
| ------------------- | -------------------- |
| row (default-value) | left to right        |
| column              | top to bottom        |
| row-reverse         | right to left        |
| column-reverse      | bottom to top        |
|                     |                      |

&nbsp;

## Syntax

```css
.flex-container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
}
```

&nbsp;

&nbsp;

# `justify-content` Property

The `justify-content` property is used to **align the flex items** when they do not use all available space on the main-axis (horizontally).

&nbsp;

## Values of `justify-content`

The `justify-content` property can have one of the following values:

| Values        | Description                                                |
| ------------- | ---------------------------------------------------------- |
| center        | positions the flex items in the center                     |
| flex-start    | positions the flex items at the beginning of the container |
| flex-end      | positions the flex items at the end of the container       |
| space-between | displays the flex items with space between them            |
| space-around  | displays the flex items with space around them             |
| space-evenly  | displays the flex items with equal space around them       |
|               |                                                            |

&nbsp;

## Syntax

```css
.flex-container {
  display: flex;
  justify-content: center | flex-start | flex-end | space-between | space-around
    | space-evenly;
}
```

&nbsp;

## space-around vs space-evenly

[space-around vs space-evenly](https://www.samanthaming.com/flexbox30/14-space-around-vs-space-evenly/)

&nbsp;

&nbsp;

# `align-items` Property

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
